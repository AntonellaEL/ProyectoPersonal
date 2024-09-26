import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_ENDPOINT}/productos`; 

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
