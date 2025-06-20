const mongoose = require('mongoose');
const Vehicle = require('../models/Vehicle');  // Make sure the path to your Vehicle model is correct

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taprentals', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Function to set category based on vehicle name or other criteria
const setCategory = (vehicleName) => {
  if (vehicleName.toLowerCase().includes('sedan')) {
    return 'sedan';
  } else if (vehicleName.toLowerCase().includes('suv')) {
    return 'suv';
  } else if (vehicleName.toLowerCase().includes('hatchback')) {
    return 'hatchback';
  } else {
    return 'other';  // Default category if none of the conditions match
  }
};

// Update the vehicles
const updateCategories = async () => {
  try {
    const vehicles = await Vehicle.find(); // Find all vehicles

    // Iterate through each vehicle and update the category
    for (const vehicle of vehicles) {
      const category = setCategory(vehicle.name); // Set category based on vehicle name
      vehicle.category = category; // Update the category field
      await vehicle.save(); // Save the updated vehicle
      console.log(`Updated ${vehicle.name} to category: ${category}`);
    }

    console.log('All vehicles have been updated with categories!');
    mongoose.connection.close(); // Close the connection
  } catch (err) {
    console.error('Error updating vehicles:', err);
  }
};

// Call the update function
updateCategories();
