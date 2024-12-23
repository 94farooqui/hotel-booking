import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";
const token = localStorage.getItem("token");

export const getHotels = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

export const getHotelById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
};

export const addHotel = async (hotelData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/hotels`, hotelData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == (200 || 201)) {
      return {
        response: true,
        mesage: "Successfully added",
        data: response.data,
      };
    } else return { response: false, message: "Unable to add the hotel" };
  } catch (error) {
    return { response: false, message: "Unable to add the hotel" };
  }
};

export const deleteHotel = () => {};
