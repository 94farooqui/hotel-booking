const express = require('express');
const { addBooking, getBookingsByUser } = require('../conrollers/bookingController.js');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addBooking);
router.get('/user/:userId', protect, getBookingsByUser);

module.exports = router;
