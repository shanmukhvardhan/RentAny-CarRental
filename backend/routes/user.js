// routes/user.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/auth');


// Route to update user profile
router.put('/profile', verifyToken, async (req, res) => {
  const userId = req.user.id; // From JWT token

  try {
    // Find user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields if provided
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    

    // Save updated user
    await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
