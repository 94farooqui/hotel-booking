import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getHotels = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

export const getHotelById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/hotels/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching hotel details:', error);
      throw error;
    }
  };

export const addHotel = (hotelData) => {

}

export const deleteHotel = () => {

}