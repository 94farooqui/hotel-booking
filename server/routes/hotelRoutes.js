const express = require('express');
const {
  getHotels,
  getHotelById,
  addHotel,
  updateHotel,
  deleteHotel,
} = require('../conrollers/hotelCoontrollers.js');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getHotels);
router.get('/:id', getHotelById);
router.post('/', protect, addHotel); // Admin only
router.put('/:id', protect, updateHotel); // Admin only
router.delete('/:id', protect, deleteHotel); // Admin only

module.exports = router;
