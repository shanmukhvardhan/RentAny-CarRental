require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');  // Correctly import the routes
const userRoute = require('./routes/user');
const bookingsRoute = require('./routes/bookings');
const vehicleRoutes = require("./routes/vehicles");
const app = express();
app.use(cors());
app.use(express.json());

//dotenv.config();

// Use env variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoute);  // Use authRoute once here
app.use('/api/listings', require('./routes/listings'));
app.use('/api/user', require('./routes/user'));
app.use('/api/user', userRoute);
app.use('/api/bookings', bookingsRoute);
app.use("/api/vehicles", vehicleRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
