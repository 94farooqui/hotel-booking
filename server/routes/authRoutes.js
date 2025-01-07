const express = require('express');
const { registerUser, loginUser, verifyToken} = require('./../conrollers/authController.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

// Register route
router.post('/register', registerUser);
router.get('/verifyToken', protect, verifyToken )

// Login route
router.post('/login', loginUser);

module.exports = router;
