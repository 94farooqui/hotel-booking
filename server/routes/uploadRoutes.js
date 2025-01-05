const express = require('express');

const {upload} =require('../multer.js');
const { uploadHotelImage } = require('../conrollers/uploadController.js');
const router = express.Router();


router.post('/hotelImage/:hotelId', upload.single('hotelImage') ,uploadHotelImage); // Admin only

module.exports = router;
