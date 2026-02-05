const { where } = require('sequelize');
const { Booking, User, Payment } = require('../models');
const {sendAdminBookingEmail, sendClientBookingEmail} = require('./emailController')
const sgMail = require('@sendgrid/mail')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const allBookings = async (req, res) => {
    try {
        const allBookings = await Booking.findAll({
            include: [{
                model: Payment, // This ensures the 'Payments' array is sent to the frontend
                as: 'Payments'
            }],
            order: [['created_at', 'DESC']] // Orders by updated_at descending
        });

        return res.status(201).json({
            message: 'completed', allBookings
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
}

const bookingsById = async (req, res) => {
    const booking_id = req.params.bookingId;

    try {
        const bookingDetails = await Booking.findOne({
            where: { booking_id }
        })

        return res.status(201).json({
            message: 'completed', bookingDetails
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
}

const sendFinalInvoice = async (booking) => {
  const total = booking.totalAmount;
  const deposit = Math.round(total * 0.5);
  const balance = total - deposit;

  await sgMail.send({
    to: booking.email,
    from: { email: 'Ruke@soireesandteepees.com', name: 'Soirées & Teepees' },
    subject: `Official Receipt: Payment Complete! (#${booking.id.slice(0, 8)})`,
    html: `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                .wrapper { background-color: #fef6f5; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .invoice-card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(232, 123, 103, 0.1); }
                .header { background-color: #f9d8d0; padding: 40px 20px; text-align: center; }
                .content { padding: 40px; color: #444; }
                .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .details-table td { padding: 12px 0; border-bottom: 1px solid #eee; font-size: 14px; }
                .label { color: #999; font-weight: bold; text-transform: uppercase; font-size: 11px; }
                .value { text-align: right; font-weight: 600; color: #333; }
                .total-section { background: #fff4f3; padding: 20px; border-radius: 12px; margin-top: 20px; }
                .total-row { display: flex; justify-content: space-between; margin: 5px 0; font-size: 14px; }
                .grand-total { font-size: 20px; font-weight: 900; color: #e87b67; margin-top: 10px; border-top: 2px solid #f9d8d0; pt-10px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; }
            </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="invoice-card">
                    <div class="header">
                        <h1 style="margin:0; color: #e87b67; letter-spacing: 2px;">RECEIPT</h1>
                        <p style="margin:5px 0 0; color: #888;">Thank you for your full payment!</p>
                    </div>
                    <div class="content">
                        <h2>Hi ${booking.parentName},</h2>
                        <p>Your celebration is officially on the calendar. Below is your final booking summary and receipt.</p>
                        
                        <table class="details-table">
                            <tr>
                                <td class="label">Guest of Honor</td>
                                <td class="value">${booking.childName} (${booking.childAge} yrs)</td>
                            </tr>
                            <tr>
                                <td class="label">Event Date</td>
                                <td class="value">${new Date(booking.eventDate).toLocaleDateString()} at ${booking.eventTime}</td>
                            </tr>
                            <tr>
                                <td class="label">Package</td>
                                <td class="value">${booking.packageType}</td>
                            </tr>
                            <tr>
                                <td class="label">Theme</td>
                                <td class="value">${booking.theme?.length > 0 ? booking.theme.join(", ") : "Standard"}</td>
                            </tr>
                            <tr>
                                <td class="label">Location</td>
                                <td class="value">${booking.address}, ${booking.city}</td>
                            </tr>
                        </table>

                        <div class="total-section">
                            <div class="total-row">
                                <span>Total Amount</span>
                                <span>₦${total.toLocaleString()}</span>
                            </div>
                            <div class="total-row" style="color: #666;">
                                <span>Deposit Paid</span>
                                <span>- ₦${deposit.toLocaleString()}</span>
                            </div>
                            <div class="total-row" style="color: #666;">
                                <span>Balance Paid</span>
                                <span>- ₦${balance.toLocaleString()}</span>
                            </div>
                            <div class="total-row grand-total">
                                <span>BALANCE DUE</span>
                                <span>₦0.00</span>
                            </div>
                        </div>
                        
                        <p style="margin-top:30px; font-size: 13px; color: #666;">
                            <b>Note:</b> ${booking.specialRequests || "No special requests noted."}
                        </p>
                    </div>
                </div>
                <div class="footer">
                    <p>Soirées & Teepees | Hanover, Maryland 21076</p>
                    <p>If you have questions, contact us at 240-930-4524</p>
                </div>
            </div>
        </body>
    </html>`
  });
};

const updateBooking = async (req, res) => {
  try {
    const { status } = req.body;
    const { bookingId } = req.params;
    console.log(status)

    const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const isNowConfirmed = status === 'confirmed' && booking.status !== 'confirmed';

    const isNowCancelled = status === 'cancelled' && booking.status !== 'cancelled';

    const isNowCompleted = status === 'completed' && booking.status !== 'completed'

    await booking.update({ status: status });

    if (isNowConfirmed) {
        const balanceAmount = Math.round(booking.totalAmount * 0.5)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            customer_email: booking.email,
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { 
                        name: `Balance Payment - ${booking.packageType}`,
                        description: `Final 50% payment for ${booking.childName}'s party`
                    },
                    unit_amount: balanceAmount * 100, // Cents
                },
                quantity: 1,
            }],
            metadata: { 
                bookingId: booking.id, 
                paymentType: 'full'
            },
            success_url: 'https://soireesandteepees.com/thank-you',
            cancel_url: 'https://soireesandteepees.com/error',
        });

        await sgMail.send({
            to: [booking.email, 'Ruke@soireesandteepees.com'],
            from: {
                email: 'Ruke@soireesandteepees.com',
                name: 'Soirees and Teepees Bookings'
            },
            subject: `Booking Confirmed - Soirées and Teepees`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Booking Confirmation - Soirées and Teepees</title>
                <style>
                    body {
                    background-color: #fef6f5;
                    font-family: 'Poppins', Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #444;
                    }
                    .email-container {
                    max-width: 650px;
                    background-color: #fff;
                    margin: 40px auto;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    }
                    .header {
                    background-color: #f9d8d0;
                    padding: 24px;
                    text-align: center;
                    }
                    .logo {
                    width: 80px;
                    height: auto;
                    margin-bottom: 8px;
                    }
                    .header h1 {
                    margin: 0;
                    color: #e87b67;
                    font-size: 24px;
                    }
                    .content {
                    padding: 30px;
                    line-height: 1.7;
                    }
                    .content h2 {
                    color: #e87b67;
                    font-size: 22px;
                    margin-bottom: 12px;
                    }
                    .content p {
                    margin: 8px 0;
                    }
                    .summary {
                    background-color: #fff4f3;
                    border-radius: 12px;
                    padding: 16px 20px;
                    margin: 24px 0;
                    }
                    .summary ul {
                    padding: 0;
                    list-style: none;
                    margin: 0;
                    }
                    .summary li {
                    margin: 6px 0;
                    font-size: 15px;
                    }
                    hr {
                    border: none;
                    border-top: 1px solid #eee;
                    margin: 24px 0;
                    }
                    .footer {
                    background-color: #fef2f1;
                    text-align: center;
                    padding: 20px;
                    color: #999;
                    font-size: 14px;
                    }
                    .footer a {
                    color: #e87b67;
                    text-decoration: none;
                    font-weight: 500;
                    }
                </style>
                </head>
                <body>
                <div class="email-container">
                    <div class="header">
                    <img src="https://i.ibb.co/0pTr6k4z/Screenshot-17.png" alt="Soirées and Teepees Logo" class="logo" />
                    <h1>Soirées and Teepees</h1>
                    </div>
                    <div class="content">
                    <h2>Hi ${parentName},</h2>
                    <p>Thank you for booking with <b>Soirées and Teepees</b>! 🎉</p>
                    <p>
                        We’ve successfully received your deposit of 
                        <b>₦${Math.round(totalAmount * 0.5).toLocaleString()}</b> for your <b>${packageType}</b> appointment scheduled on 
                        <b>${new Date(eventDate).toLocaleString()}</b>.
                    </p>
                    <p>
                        Your booking is now <b>partially confirmed</b>. 
                        To secure your spot fully, balance is required atleast 5 days before event date.
                    </p>
                    <p>
                        Once full payment is received, you’ll get another confirmation email 
                        with your final booking details.
                    </p>

                    <div class="summary">
                        <p><b>Booking Summary:</b></p>
                        <ul>
                        <li><b>Service:</b> ${packageType}</li>
                        <li><b>Date & Time:</b> ${new Date(eventDate).toLocaleString()}</li>
                        <li><b>Deposit Paid:</b> ₦${Math.round(totalAmount * 0.5).toLocaleString()}</li>
                        <li><b>Balance Remaining:</b> ₦${Math.round(totalAmount * 0.5).toLocaleString()}</li>
                        </ul>
                    </div>
                    <p>
                        If you have any questions or need to make changes, feel free to reply to this email or contact us directly.
                    </p>
                    <p>To finalize your slot, please complete the balance payment using the button below:</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${session.url}" 
                           style="background-color: #e87b67; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                           Pay Balance (₦${balanceAmount.toLocaleString()})
                        </a>
                    </div>

                    <p style="font-size: 12px; color: #999;">If the button doesn't work, copy this link: ${session.url}</p>

                    <p>We can’t wait to make your event magical! ✨</p>
                    <p>— The <b>Soirées and Teepees</b> Team</p>
                    </div>

                    <div class="footer">
                    <p>
                        Soirées and Teepees • Los Angeles, CA<br/>
                        <a href="https://soireesandteepees.com">soireesandteepees.com</a>
                    </p>
                    </div>
                </div>
                </body>
                </html>
            `
        });
    }

    if (isNowCompleted) {
       await sendFinalInvoice(booking);
    }

    if (isNowCancelled) {
      await sgMail.send({
        to: [booking.email, 'Ruke@soireesandteepees.com'],
        from: {
          email: 'Ruke@soireesandteepees.com',
          name: 'Soirees and Teepees Bookings'
        },
        subject: `Booking Cancellation - Soirées and Teepees`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family: sans-serif; color: #444; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
              <h2 style="color: #e87b67;">Booking Update</h2>
              <p>Hi ${booking.parentName},</p>
              <p>This email is to confirm that your booking for the <b>${booking.packageType}</b> on <b>${new Date(booking.eventDate).toLocaleDateString()}</b> has been <b>cancelled</b>.</p>
              <p>If you believe this is a mistake or would like to reschedule, please contact our team as soon as possible by replying to this email.</p>
              <p>Best regards,<br/>The Soirées and Teepees Team</p>
            </div>
          </body>
          </html>
        `
      });
    }

    res.json({ success: true, message: `Status updated to ${status} and client notified.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update status" });
  }
};

const addBookings = async (req, res) => {
    const {parentName, childName, phone, email, address, city, zipcode, packageType, addOns, eventDate, eventTime,eventDuration, guestCount, childAge, paymentStatus, specialRequests, totalAmount, paymentMethod, theme} = req.body;

    if (!parentName || !phone || !email || !address || !packageType || !eventDate || !eventTime || !eventDuration || !paymentStatus || !totalAmount || !guestCount) {
        return res.status(400).json({ error: 'All fields are required.' });
    };

    try {
        // const user = await  User.findOne({where: {email}});

        const newBooking = await Booking.create({
            parentName,
            childName,
            phone,
            email,
            address,
            city,
            zipcode,
            packageType,
            addOns,
            eventDate,
            eventTime,
            eventDuration,
            guestCount,
            childAge,
            theme,
            paymentStatus,
            paymentMethod,
            specialRequests,
            totalAmount,
        });

        await sgMail.send({
            to: 'Ruke@soireesandteepees.com',
            from: { email: 'Ruke@soireesandteepees.com', name: 'New Booking Alert' },
            subject: `🚨 New Booking Alert: ${parentName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .invoice-box {
                            max-width: 600px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
                        .invoice-box table { width: 100%; line-height: inherit; text-align: left; }
                        .invoice-box table td { padding: 5px; vertical-align: top; }
                        .invoice-box table tr td:nth-child(2) { text-align: right; }
                        .invoice-box table tr.top table td { padding-bottom: 20px; }
                        .invoice-box table tr.information table td { padding-bottom: 40px; }
                        .invoice-box table tr.heading td { background: #f9d8d0; border-bottom: 1px solid #ddd; font-weight: bold; color: #e87b67; }
                        .invoice-box table tr.item td { border-bottom: 1px solid #eee; }
                        .invoice-box table tr.total td:nth-child(2) { border-top: 2px solid #eee; font-weight: bold; color: #e87b67; font-size: 20px; }
                        .badge { background: #fff4f3; color: #e87b67; padding: 5px 10px; border-radius: 5px; font-size: 12px; text-transform: uppercase; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="invoice-box">
                        <table cellpadding="0" cellspacing="0">
                            <tr class="top">
                                <td colspan="2">
                                    <table>
                                        <tr>
                                            <td style="font-size: 28px; line-height: 28px; color: #333;">
                                                <b>NEW BOOKING</b><br>
                                                <span style="font-size: 14px; color: #999;">Received: ${new Date().toLocaleDateString()}</span>
                                            </td>
                                            <td>
                                                <span class="badge">${paymentStatus}</span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr class="information">
                                <td colspan="2">
                                    <table>
                                        <tr>
                                            <td>
                                                <b>Customer:</b><br>
                                                ${parentName}<br>
                                                ${email}<br>
                                                ${phone}
                                            </td>
                                            <td>
                                                <b>Location:</b><br>
                                                ${address}<br>
                                                ${city}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr class="heading">
                                <td>Event Details</td>
                                <td>Info</td>
                            </tr>

                            <tr class="item">
                                <td>Package</td>
                                <td>${packageType}</td>
                            </tr>
                            <tr class="item">
                                <td>Date & Time</td>
                                <td>${eventDate} @ ${eventTime}</td>
                            </tr>
                            <tr class="item">
                                <td>Child Name (Age)</td>
                                <td>${childName} (${childAge})</td>
                            </tr>
                            <tr class="item">
                                <td>Guest Count</td>
                                <td>${guestCount}</td>
                            </tr>

                            <tr class="total">
                                <td></td>
                                <td>Total: ₦${totalAmount.toLocaleString()}</td>
                            </tr>
                        </table>
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://localhost:3000/admin" style="background-color: #e87b67; color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold;">View Dashboard</a>
                        </div>
                    </div>
                </body>
                </html>
            `
        });

        return res.status(201).json({
            success: true,
            message: 'Booking created Successfully',
            newBooking
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
}

const resendBalanceLink = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) return res.status(404).json({ error: "Booking not found" });

    // Create a new Stripe Session for the remaining 50%
    const balanceAmount = Math.round(booking.totalAmount * 0.5);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: booking.email,
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { 
            name: `Balance Payment - ${booking.packageType}`,
            description: `Final 50% payment for ${booking.childName}'s party`
        },
          unit_amount: balanceAmount * 100,
        },
        quantity: 1,
      }],
      metadata: { bookingId: booking.id, paymentType: 'full' },
      success_url: 'https://soireesandteepees.com/thank-you',
      cancel_url: 'https://soireesandteepees.com/error',
    });

    // Send the Email
    await sgMail.send({
      to: booking.email,
      from: 'Ruke@soireesandteepees.com',
      subject: `Action Required: Balance Payment for ${booking.childName}'s Party`,
      html: `<p>Hi ${booking.parentName}, here is your requested payment link for the balance: <a href="${session.url}">Pay ₦${balanceAmount.toLocaleString()}</a></p>`
    });

    res.json({ success: true, message: "Link sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to resend link" });
  }
};

module.exports = { addBookings, allBookings, bookingsById, updateBooking, resendBalanceLink, sendFinalInvoice };