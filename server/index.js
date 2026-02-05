const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const db = require('./models');
// const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const {sendFinalInvoice} = require('./controllers/bookingController')
// const usersRoutes = require('./routes/userRoute');
// const cartRoutes = require('./routes/cart');
// const galleryRoutes = require('./routes/gallery');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors({
  origin: ['https://soireesandteepees.com', 'http://localhost:3000'],
  credentials: true,           
}));

app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Set this in your Stripe dashboard
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const session = event.data.object;
  const {bookingId, paymentType} = session.metadata;
  const booking = await db.Booking.findByPk(bookingId);

  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }


  if (event.type === 'checkout.session.completed') {
    await db.Payment.create({
      booking_id: booking.id,
      amount: session.amount_total / 100,
      type: paymentType,
      stripeSessionId: session.id,
      status: 'succeeded'
    });

    if (paymentType === 'full') {

      // UPDATE TO FULLY PAID
      await booking.update({ paymentStatus: 'paid' });
      
      await sendFinalInvoice(booking); 

      await sgMail.send({
        to: 'Ruke@soireesandteepees.com',
        from: 'system@soireesandteepees.com',
        subject: `💰 Balance Cleared: ${booking.parentName}`,
        text: `The balance for booking ${booking.id} has been paid in full.`
      });
    } else {
        // UPDATE TO PARTIALLY PAID (Initial Deposit)
        await booking.update({ paymentStatus: 'partially_paid' });
    }

  } else if (
    event.type === 'checkout.session.expired' ||
    event.type === 'checkout.session.async_payment_failed'
  ) {

    await db.Payment.create({
      booking_id: booking.id,
      amount: session.amount_total / 100,
      type: paymentType,
      stripeSessionId: session.id,
      status: 'failed'
    });

    if (paymentType === 'full') {
      console.log(`Balance payment failed for Booking ${bookingId}. Keeping status as partially_paid.`);
      
      // OPTIONAL: Notify Admin that the balance payment failed
      await sgMail.send({
        to: 'Ruke@soireesandteepees.com',
        from: 'system@soireesandteepees.com',
        subject: `⚠️ Balance Payment Failed: ${booking.parentName}`,
        text: `The client attempted to pay the balance for booking ${booking.id}, but the transaction failed or expired.`
      });
    } else {
      // Update booking status to 'Failed'
      await booking.update({paymentStatus: 'failed'})
    }
  }
  res.json({ received: true });
});

app.use(express.json());

app.post('/api/create-stripe-session', async (req, res) => {
  try {
    const { totalAmount, email, bookingId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Payment Summary for Party Booking',
            },
            unit_amount: Math.round(totalAmount * 100), // Stripe expects amount in cents
          },
          quantity: 1,
        },
      ],
      metadata: { 
        bookingId: bookingId, 
        paymentType: 'deposit'
      },
      success_url: 'https://soireesandteepees.com/thank-you',
      cancel_url: 'https://soireesandteepees.com/error',
    });
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
});

app.use('/api/booking', bookingRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});
// app.use('/api/auth', authRoutes);
// app.use('/api/users', usersRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/gallery', galleryRoutes);

// {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }
const port = process.env.PORT || 8080;

// app.use(fileUpload());
// app.use(cookieParser());


db.sequelize.sync({alter: true}).then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`server is running on ports ${port}`); 
    });
})

