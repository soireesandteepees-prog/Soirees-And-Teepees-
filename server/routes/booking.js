const express = require('express');
const router = express.Router();
const {addBookings, allBookings, updateBooking} = require('../controllers/bookingController')

router.post("/addBooking", addBookings);
router.get('/allbookings', allBookings);
router.patch("/:bookingId/status", updateBooking);


module.exports = router;