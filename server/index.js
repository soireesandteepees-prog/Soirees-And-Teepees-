const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
// const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const usersRoutes = require('./routes/userRoute');
// const cartRoutes = require('./routes/cart');
// const galleryRoutes = require('./routes/gallery');

// {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
// app.use(fileUpload());
// app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('API is running...');
});

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
      success_url: 'http://localhost:3000/thank-you',
      cancel_url: 'http://localhost:3000/error',
    });
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
});
// app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
// app.use('/api/users', usersRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/gallery', galleryRoutes);

db.sequelize.sync({alter: true}).then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`server is running on port ${port}`); 
    });
})

