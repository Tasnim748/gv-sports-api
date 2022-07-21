const { Schema, model } = require('mongoose');

// the schema
const bookingSchema = Schema({
    phone: String,
    name: String,
    date: String,
    slot: String,
    dateSlot: {type: String, unique: true}
});

// model declare and export
module.exports.Bookings = model('Bookings', bookingSchema);
