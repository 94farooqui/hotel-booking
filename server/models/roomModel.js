const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  roomType: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  features: { type: [String], default: [] },
});

module.exports = mongoose.model('Room', roomSchema);
