// routes/bookings.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');
const verifyToken = require('../middleware/auth');

const { ObjectId } = mongoose.Types;

// Route to get all available vehicles
router.get('/available', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error retrieving vehicles:', error);
    res.status(500).json({ message: 'Error retrieving vehicles' });
  }
});

// Required for ObjectId conversion


// Route: GET /api/bookings/user/:userId
router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Convert to ObjectId
        const objectId = new mongoose.Types.ObjectId(userId);

        const bookings = await Booking.find({ userId: objectId });
        res.json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while fetching bookings.' });
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling booking' });
  }
});



// Route to create a booking (Protected route)
router.post('/create', verifyToken, async (req, res) => {
  try {
    console.log('Booking request body:', req.body);
    const {
      userId,
      vehicleId,
      vehicleName,
      imageUrl,
      pickupDate,
      handoverDate,
      pricePerDay,
      totalPrice
    } = req.body;

    if (!userId || !vehicleId || !pickupDate || !handoverDate) {
      return res.status(400).json({ error: 'Missing required booking information.' });
    }

    const userObjectId = new ObjectId(userId);
    const vehicleObjectId = new ObjectId(vehicleId);

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      vehicleId: vehicleObjectId,
      $or: [
        {
          pickupDate: { $lte: new Date(handoverDate) },
          handoverDate: { $gte: new Date(pickupDate) }
        }
      ]
    });

    if (overlappingBooking) {
      return res.status(409).json({ message: 'Vehicle already booked for selected dates.' });
    }

    const newBooking = new Booking({
      userId: userObjectId,
      vehicleId: vehicleObjectId,
      vehicleName,
      imageUrl,
      pickupDate: new Date(pickupDate),
      handoverDate: new Date(handoverDate),
      pricePerDay,
      totalPrice
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking confirmed', booking: newBooking });

  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

module.exports = router;
