const Hotel = require('../models/hotelModel');

const uploadHotelImage = async (req, res) => {

  const { hotelId} = req.params
    try {
      const filePath = `uploads/${req.file.filename}`
      const hotel = await Hotel.findById(hotelId)

      if(!hotel){
        return res.status(404).json({msg:"Hotel not found "})
      }

      hotel.photos.push(filePath)
      const photoSaved = await hotel.save()

      if(photoSaved){
        console.log("File name from controller", req.file.filename )
        return res.status(200).json({ message: 'File uploaded successfully', name: req.file.filename, path: filePath});
      }
      else throw new Error("Something went wrong!");
      
      } catch (error) {
        console.log(error);
        return res.status(500).json("Error in uploading")
      }
}

module.exports = {uploadHotelImage}