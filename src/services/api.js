import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getHostels = async () => {
  try {
    const response = await api.get('/hostels');
    return response.data;
  } catch (error) {
    console.error('Error fetching hostels:', error);
    throw error;
  }
};

export const addHostel = async (hostelData) => {
  try {
    const response = await api.post('/hostels', hostelData);
    return response.data;
  } catch (error) {
    console.error('Error adding hostel:', error);
    throw error;
  }
};

export const getPricing = async () => {
  try {
    const response = await api.get('/pricing');
    return response.data;
  } catch (error) {
    console.error('Error fetching pricing:', error);
    throw error;
  }
};

export const addPricing = async (pricingData) => {
  try {
    const response = await api.post('/pricing', pricingData);
    return response.data;
  } catch (error) {
    console.error('Error adding pricing:', error);
    throw error;
  }
};

export default api;
