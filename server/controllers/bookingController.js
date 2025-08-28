const { where } = require('sequelize');
const { Booking, User } = require('../models');

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
        const user = await  User.findOne({where: {email}});

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