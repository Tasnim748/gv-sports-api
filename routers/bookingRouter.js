const express = require('express');
const { Bookings } = require('../models/booking');
const router = express.Router();

// route functions
const newBooking = async (req, res) => {
    const booking = new Bookings(req.body);
    try {
        await booking.save();
        res.status(201).send("booking placed successfully!")
    } catch(err) {
        res.status(400).send("This slot is already booked!");
    }
};

const getOneDate = async (req, res) => {
    const slots = await Bookings.find({date: req.query.date});
    res.status(200).send(slots);
}


// route setup
router.route('/')
    .post(newBooking)
    .get(getOneDate);

// router export
module.exports = router;