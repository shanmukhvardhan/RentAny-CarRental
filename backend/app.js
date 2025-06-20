require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Required for static file serving

// Import routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const bookingsRoute = require('./routes/bookings');
const vehicleRoutes = require("./routes/vehicles");
const listingsRoute = require('./routes/listings'); // Added missing import

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', authRoute);
app.use('/api/listings', listingsRoute); // Fixed duplicate route
app.use('/api/user', userRoute);
app.use('/api/bookings', bookingsRoute);
app.use("/api/vehicles", vehicleRoutes);

// Catch-all route for frontend routing
app.get('/*any', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
