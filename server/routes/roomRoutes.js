const express = require('express');
const {
  getRoomsByHotel,
  addRoom,
  updateRoom,
  deleteRoom,
} = require('../conrollers/roomControllers.js');
const { protect } = require('../middleware/authMiddleware.js');
const router = express.Router();

router.get('/:hotelId', getRoomsByHotel);
router.post('/', protect, addRoom); // Admin only
router.put('/:id', protect, updateRoom); // Admin only
router.delete('/:id', protect, deleteRoom); // Admin only

module.exports = router;
