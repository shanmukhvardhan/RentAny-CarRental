const mongoose = require('mongoose');

// Define the Vehicle schema
const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    required: true // Indicates if the vehicle is available for booking
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Vehicle model based on the schema
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
