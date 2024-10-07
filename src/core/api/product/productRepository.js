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

export const postProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data; 
  } catch (error) {
    console.error('Error saving product:', error);
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

export const updateProduct = async (productId, productData) => {
  try {
    await axios.put(`${API_URL}/${productId}`, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
