const mongoose = require("mongoose");

const roomTypeSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const roomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomType: roomTypeSchema,
  description: { type: String, required: true },
  price: { type: Number, required: true },
  amenities: { type: [String], default: [] },
  availability: { type: Boolean, default: true },

  images: [{ type: String }],
});

module.exports = mongoose.model("Room", roomSchema);
