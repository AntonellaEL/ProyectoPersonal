import { getAllProducts } from './productRepository';

export const fetchProducts = async () => {
  return await getAllProducts(); 
};
