const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
// const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
// const usersRoutes = require('./routes/userRoute');
// const cartRoutes = require('./routes/cart');
// const galleryRoutes = require('./routes/gallery');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors({
  origin: ['https://soiress-and-teepees.vercel.app', 'http://localhost:3000'],
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

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;
    // Update booking status to 'Completed'
    await db.Booking.update(
      { paymentStatus: 'paid' },
      { where: { id: bookingId } }
    );
  } else if (
    event.type === 'checkout.session.expired' ||
    event.type === 'checkout.session.async_payment_failed'
  ) {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;
    // Update booking status to 'Failed'
    await db.Booking.update(
      { paymentStatus: 'failed' },
      { where: { id: bookingId } }
    );
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
      metadata: {bookingId},
      success_url: 'https://soiress-and-teepees.vercel.app/thank-you',
      cancel_url: 'https://soiress-and-teepees.vercel.app/error',
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


db.sequelize.sync().then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`server is running on port ${port}`); 
    });
})

