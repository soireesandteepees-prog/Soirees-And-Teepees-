const { where } = require('sequelize');
const { Booking, User } = require('../models');
const nodemailer = require('nodemailer')
const {sendAdminBookingEmail, sendClientBookingEmail} = require('./emailController')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false // Helps if you are behind a proxy/firewall
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("❌ Email Connection Error:");
        console.error(error);
    } else {
        console.log("✅ Email Server is ready to take our messages");
    }
});

const allBookings = async (req, res) => {
    try {
        const allBookings = await Booking.findAll({
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

const updateBooking = async (req, res) => {
  try {
    const { status } = req.body;
    const { bookingId } = req.params;
    console.log(status)

    const validStatuses = ["pending", "completed", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await booking.update({ status: status });

    res.json({ success: true, message: "Status updated successfully"});
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


        await transporter.sendMail({
            from: `"Soirees and Teepees Bookings" <${process.env.EMAIL_USER}>`,
            // from: {
            //     email: 'Ruke@soireesandteepees.com',
            //     name: 'Soirees and Teepees Bookings'
            // },
            to: email,
            subject: `New Booking`,
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
                        <b>₦${Math.round(totalAmount * 0.5)}</b> for your <b>${packageType}</b> appointment scheduled on 
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
                        <li><b>Deposit Paid:</b> ₦${Math.round(totalAmount * 0.5)}</li>
                        <li><b>Balance Remaining:</b> ₦${Math.round(totalAmount * 0.5)}</li>
                        </ul>
                    </div>

                    <p>
                        If you have any questions or need to make changes, feel free to reply to this email or contact us directly.
                    </p>
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
            `,
        });

        // await sgMail.send({
        //     to: email,
        //     from: {
        //         email: 'Ruke@soireesandteepees.com',
        //         name: 'Soirees and Teepees Bookings'
        //     },   
        //     subject: `New Booking`,
        //     html: `
        //         <!DOCTYPE html>
        //         <html lang="en">
        //         <head>
        //         <meta charset="UTF-8" />
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //         <title>Booking Confirmation - Soirées and Teepees</title>
        //         <style>
        //             body {
        //             background-color: #fef6f5;
        //             font-family: 'Poppins', Arial, sans-serif;
        //             margin: 0;
        //             padding: 0;
        //             color: #444;
        //             }
        //             .email-container {
        //             max-width: 650px;
        //             background-color: #fff;
        //             margin: 40px auto;
        //             border-radius: 16px;
        //             overflow: hidden;
        //             box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        //             }
        //             .header {
        //             background-color: #f9d8d0;
        //             padding: 24px;
        //             text-align: center;
        //             }
        //             .logo {
        //             width: 80px;
        //             height: auto;
        //             margin-bottom: 8px;
        //             }
        //             .header h1 {
        //             margin: 0;
        //             color: #e87b67;
        //             font-size: 24px;
        //             }
        //             .content {
        //             padding: 30px;
        //             line-height: 1.7;
        //             }
        //             .content h2 {
        //             color: #e87b67;
        //             font-size: 22px;
        //             margin-bottom: 12px;
        //             }
        //             .content p {
        //             margin: 8px 0;
        //             }
        //             .summary {
        //             background-color: #fff4f3;
        //             border-radius: 12px;
        //             padding: 16px 20px;
        //             margin: 24px 0;
        //             }
        //             .summary ul {
        //             padding: 0;
        //             list-style: none;
        //             margin: 0;
        //             }
        //             .summary li {
        //             margin: 6px 0;
        //             font-size: 15px;
        //             }
        //             hr {
        //             border: none;
        //             border-top: 1px solid #eee;
        //             margin: 24px 0;
        //             }
        //             .footer {
        //             background-color: #fef2f1;
        //             text-align: center;
        //             padding: 20px;
        //             color: #999;
        //             font-size: 14px;
        //             }
        //             .footer a {
        //             color: #e87b67;
        //             text-decoration: none;
        //             font-weight: 500;
        //             }
        //         </style>
        //         </head>
        //         <body>
        //         <div class="email-container">
        //             <div class="header">
        //             <img src="https://i.ibb.co/0pTr6k4z/Screenshot-17.png" alt="Soirées and Teepees Logo" class="logo" />
        //             <h1>Soirées and Teepees</h1>
        //             </div>
        //             <div class="content">
        //             <h2>Hi ${parentName},</h2>
        //             <p>Thank you for booking with <b>Soirées and Teepees</b>! 🎉</p>
        //             <p>
        //                 We’ve successfully received your deposit of 
        //                 <b>₦${Math.round(totalAmount * 0.5)}</b> for your <b>${packageType}</b> appointment scheduled on 
        //                 <b>${new Date(eventDate).toLocaleString()}</b>.
        //             </p>
        //             <p>
        //                 Your booking is now <b>partially confirmed</b>. 
        //                 To secure your spot fully, please complete the remaining balance of 
        //                 <b>₦${Math.round(totalAmount * 0.5)}</b> at least <b>24 hours</b> before your appointment.
        //             </p>
        //             <p>
        //                 Once full payment is received, you’ll get another confirmation email 
        //                 with your final booking details.
        //             </p>

        //             <div class="summary">
        //                 <p><b>Booking Summary:</b></p>
        //                 <ul>
        //                 <li><b>Service:</b> ${packageType}</li>
        //                 <li><b>Date & Time:</b> ${new Date(eventDate).toLocaleString()}</li>
        //                 <li><b>Deposit Paid:</b> ₦${Math.round(totalAmount * 0.5)}</li>
        //                 <li><b>Balance Remaining:</b> ₦${Math.round(totalAmount * 0.5)}</li>
        //                 </ul>
        //             </div>

        //             <p>
        //                 If you have any questions or need to make changes, feel free to reply to this email or contact us directly.
        //             </p>
        //             <p>We can’t wait to make your event magical! ✨</p>
        //             <p>— The <b>Soirées and Teepees</b> Team</p>
        //             </div>

        //             <div class="footer">
        //             <p>
        //                 Soirées and Teepees • Los Angeles, CA<br/>
        //                 <a href="https://soireesandteepees.com">soireesandteepees.com</a>
        //             </p>
        //             </div>
        //         </div>
        //         </body>
        //         </html>
        //     `
        // });

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

module.exports = { addBookings, allBookings, bookingsById, updateBooking };