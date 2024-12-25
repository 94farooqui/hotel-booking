const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, default: 0 },
  features: { type: [String], default: [] },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  photos: [{ type: String }],
  social_media: [{ type: String }],
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
