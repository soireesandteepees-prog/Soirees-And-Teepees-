const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.sendgrid.net',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//     tls: { rejectUnauthorized: false },
//     pool: true,
// });

const sendAdminBookingEmail = async (bookingData) => {
  const { parentName, email, eventDate, packageType, totalAmount, paymentStatus } = bookingData;

  const mailOptions = {
    from: `"Soirees and Teepees" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `A new booking of ${totalAmount} has been placed`,
    html: `
      <h2>New Booking Notification</h2>
      <p><b>Client:</b> ${parentName} (${email})</p>
      <p><b>Service:</b> ${packageType}</p>
      <p><b>Date:</b> ${new Date(eventDate).toLocaleString()}</p>
      <p><b>Package Price:</b> ₦${totalAmount}</p>
      <p><b>Amount Paid:</b> ₦${Math.round(totalAmount * 0.5)}</p>
      <p><b>Payment Status:</b> ${paymentStatus}</p>
      <br/>
      <p>— System Notification</p>
    `,
  };

  try {
      const info = await transporter.sendMail(mailOptions);
      console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendClientBookingEmail = async (bookingData) => {
  const { parentName, email, eventDate, totalAmount, packageType } = bookingData;

  const mailOptions = {
    from: `"Nails by Ronnie" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Booking Confirmation",
    html: `
      <h2>Hi ${parentName},</h2>
      <p>Thank you for booking with <b>Soirees and Teepees</b>! 💅</p>

      <p>
        We’ve successfully received your deposit of 
        <b>₦${Math.round(totalAmount * 0.5)}</b> for your <b>${packageType}</b> appointment scheduled on 
        <b>${new Date(eventDate).toLocaleString()}</b>.
      </p>

      <p>
        Your booking is now <b>partially confirmed</b>. 
        To secure your spot fully, please complete the remaining balance of 
        <b>₦${Math.round(totalAmount * 0.5)}</b> at least <b>24 hours</b> before your appointment.
      </p>

      <p>
        Once full payment is received, you’ll get another confirmation email 
        with your final booking details.
      </p>

      <hr/>
      <p><b>Booking Summary:</b></p>
      <ul>
        <li><b>Service:</b> ${packageType}</li>
        <li><b>Date & Time:</b> ${new Date(eventDate).toLocaleString()}</li>
        <li><b>Deposit Paid:</b> ₦${Math.round(totalAmount * 0.5)}</li>
        <li><b>Balance Remaining:</b> ₦${Math.round(totalAmount * 0.5)}</li>
      </ul>

      <hr/>
      <p>
        If you have any questions or need to make changes, feel free to reply to this email or contact us directly.
      </p>
      <p>We can’t wait to pamper you! 💖</p>
      <p>— The <b>Nails by Ronnie</b> Team</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


const sendBookingConfirmationEmail = async (bookingData) => {
  const { name, email, date, service } = bookingData;

  const mailOptions = {
    from: `"Nails by Ronnie" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Booking Confirmation",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for booking a <b>${service}</b> appointment.</p>
      <p>Your appointment date is <b>${new Date(date).toLocaleString()}</b>.</p>
      <p>We look forward to seeing you!</p>
      <br/>
      <p>— Nails by Ronnie Team 💅</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendBookingCompletionEmail = async (bookingData) => {
  const { name, email, date, service } = bookingData;

  const mailOptions = {
    from: `"Nails by Ronnie" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Booking Confirmation",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for booking a <b>${service}</b> appointment.</p>
      <p>Your appointment date is <b>${new Date(date).toLocaleString()}</b>.</p>
      <p>We look forward to seeing you!</p>
      <br/>
      <p>— Nails by Ronnie Team 💅</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendBookingRejectionEmail = async (bookingData) => {
  const { name, email, date, service } = bookingData;

  const mailOptions = {
    from: `"Nails by Ronnie" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Booking Confirmation",
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for booking a <b>${service}</b> appointment.</p>
      <p>Your appointment date is <b>${new Date(date).toLocaleString()}</b>.</p>
      <p>We look forward to seeing you!</p>
      <br/>
      <p>— Nails by Ronnie Team 💅</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {sendBookingCompletionEmail, sendBookingConfirmationEmail, sendAdminBookingEmail, sendClientBookingEmail, sendBookingRejectionEmail}

