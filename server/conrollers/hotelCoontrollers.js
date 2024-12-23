const Hotel = require('../models/hotelModel');

// Get All Hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().populate('rooms');
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Hotel by ID
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate('rooms');
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add New Hotel (Admin Only)
const addHotel = async (req, res) => {
  try {
    console.log("Add hotel request received")
    const { name, location, description, amenities, rating, coordinates } =
      req.body;

    const hotel = await Hotel.create({
      name,
      location,
      description,
      amenities,
      rating,
      coordinates,
    });

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Hotel (Admin Only)
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Hotel (Admin Only)
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json({ message: 'Hotel deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getHotels,
  getHotelById,
  addHotel,
  updateHotel,
  deleteHotel,
};
