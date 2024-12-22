const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const {protect} = require("./middleware/authMiddleware.js")
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get("/protected", protect, (req,res) => {
  console.log(req.user)
  return res.status(200).send(`Welcome ${req.user.name}`)
})



app.use('/api/auth', authRoutes);

app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

// Routes Placeholder
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/hotels', require('./routes/hotelRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
