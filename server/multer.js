// Import multer
const multer = require('multer');
const path = require('path');
const fs = require("fs")

const uploadDir = path.join(__dirname, "uploads");

if(!fs.existsSync( uploadDir)){
    fs.mkdirSync(uploadDir)
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log("File name", file.originalname)
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

module.exports = {upload}