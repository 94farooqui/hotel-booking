// export const getTodaysBookings = () => {

// };
// export const getTodaysEarnings = () => {

// };
// export const getTodaysUsers = () => {

// };
const Hotel = require("./../models/hotelModel")
const getDashboardData = async (req,res) => {
    const allHotelsCount = await Hotel.countDocuments()
    return res.status(200).json([
      {
        title: "All Hotels",
        value: allHotelsCount,
        icon: "https://img.icons8.com/?size=100&id=9166&format=png&color=000000",
      },
    ]);
}

module.exports = {
  getDashboardData
};