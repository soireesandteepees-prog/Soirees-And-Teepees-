const express = require('express');
const router = express.Router();
const {addBookings, allBookings} = require('../controllers/bookingController')

router.post("/addBooking", addBookings);
router.get('/allbookings', allBookings)

module.exports = router;