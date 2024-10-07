import { getAllProducts, deleteProduct, updateProduct, getProductById, postProduct } from './productRepository';

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

export const createProduct = async (productData) => {
  return await postProduct(productData);
};
