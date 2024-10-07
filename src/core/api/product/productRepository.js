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

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/${productId}`, { withCredentials: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
