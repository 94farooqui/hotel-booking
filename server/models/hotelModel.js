const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  amenities: { type: [String], default: [] },
  rating: { type: Number, default: 0 },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
