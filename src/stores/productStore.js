import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchProducts } from '../core/api/product/productService';

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
      await updateProduct(productId, productData);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return {
    product,
    loadProduct,
    saveProduct,
  };
});
