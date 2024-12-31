const mongoose = require("mongoose");

const socialMediaInfoSchema = mongoose.Schema({
  platform: String,
  url: String
})

const contactInfoSchema = mongoose.Schema({
  mode: String,
  detail : String
})

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  highlights: { type: [String], default: [] },
  rating: { type: Number, default: 0 },
  features: { type: [String], default: [] },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  photos: [{ type: String }],
  contactinfo: [contactInfoSchema],
  social_media: [socialMediaInfoSchema],
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
