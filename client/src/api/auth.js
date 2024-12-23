import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    console.log("Login request" , credentials)
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    if(response){
      console.log(response)
      return response.data;
    }
    
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
