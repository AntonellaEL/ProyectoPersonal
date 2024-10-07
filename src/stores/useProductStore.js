import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchProducts, editProduct, fetchProductById, createProduct } from '../core/api/product/productService';

export const useProductStore = defineStore('productStore', () => {
  const products = ref([]);

  const loadProducts = async () => {
    try {
      products.value = await fetchProducts();
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const saveProduct = async (productId, productData) => {
    try {
      await editProduct(productId, productData);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const loadProductById = async (productId) => {
    try {
      const product = await fetchProductById(productId);
      return product;
    } catch (error) {
      console.error('Error loading product by ID:', error);
    }
  };

  const postProduct = async (productData) => { 
    try {
      const product = await createProduct(productData);
      return product;
    } catch (error) {
      console.error('Error saving product:', error);
      throw error;
    }
  };

  return {
    products,
    loadProducts,
    saveProduct,
    loadProductById,
    postProduct,
  };
});
