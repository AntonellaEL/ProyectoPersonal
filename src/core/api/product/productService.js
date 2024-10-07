import { getAllProducts, deleteProduct } from './productRepository';

export const fetchProducts = async () => {
  return await getAllProducts(); 
};

export const removeProduct = async (productId) => {
  await deleteProduct(productId);
};
