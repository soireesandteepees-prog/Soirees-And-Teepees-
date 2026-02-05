const express = require('express');
const router = express.Router();
const {addBookings, allBookings, updateBooking, resendBalanceLink} = require('../controllers/bookingController')

router.post("/addBooking", addBookings);
router.get('/allbookings', allBookings);
router.patch("/:bookingId/status", updateBooking);

router.post("/:bookingId/resend-balance", resendBalanceLink);

module.exports = router;