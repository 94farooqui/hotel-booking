const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const { getDashboardData } = require("../conrollers/dashboardController.js");
const router = express.Router();

router.get("/", getDashboardData)
// router.get("/bookingsToday", protect, getTodaysBookings);
// router.get("/earningsToday", protect, getTodaysEarnings);
// router.get("/newUsersToday", protect, getTodaysUsers);
// router.get("/totalHotels", protect, getTodaysUsers);
// router.get("/totalRooms", protect, getTodaysUsers);
// router.get("/totalUsers", protect, getTodaysUsers);



module.exports = router;
