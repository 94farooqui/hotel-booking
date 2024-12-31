import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/dashboard";
const token = localStorage.getItem("token");

export const getDashboardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
