// routes/vehicles.js
const express = require("express");
const Vehicle = require("../models/Vehicle");
const Booking = require("../models/Booking");
const router = express.Router();

// Route to search for vehicles based on category, location, and availability
  router.get("/search", async (req, res) => {
  const { category, location, pickupDate, handoverDate } = req.query;

  if (!category || !location || !pickupDate || !handoverDate) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  try {
    const pickup = new Date(pickupDate);
    const handover = new Date(handoverDate);
    const categories = category.split(",");

    const vehicles = await Vehicle.find({ category: { $in: categories }, location, availability: true });

    const availableVehicles = [];

    for (let vehicle of vehicles) {
      // Check if any existing bookings overlap with requested range
      const bookings = await Booking.find({
        vehicleId: vehicle._id,
        pickupDate: { $lte: handover },
        handoverDate: { $gte: pickup }
      });

      // If no overlapping bookings, the vehicle is available
      if (bookings.length === 0) {
        availableVehicles.push(vehicle);
      }
    }

    res.json(availableVehicles);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route to get vehicle details without image
router.get("/:id/details", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id).select("-imageUrl");
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
