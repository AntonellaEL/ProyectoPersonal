import { getAllProducts, deleteProduct, updateProduct, getProductById } from './productRepository';

export const fetchProducts = async () => {
  return await getAllProducts(); 
};

export const removeProduct = async (productId) => {
  await deleteProduct(productId);
};

export const editProduct = async (productId, productData) => {
  await updateProduct(productId, productData);
};

export const fetchProductById = async (productId) => {
  return await getProductById(productId);
};
