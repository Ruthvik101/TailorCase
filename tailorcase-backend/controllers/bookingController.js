import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { service, date } = req.body;

  const booking = await Booking.create({ user: req.user._id, service, date });
  res.status(201).json(booking);
};

export const getBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });
  res.json(bookings);
};
