<script>
import { ref } from 'vue';
import ProductFormModal from '../components/ProductFormModal.vue';
import ProductList from '../components/ProductList.vue';

export default {
  components: { ProductFormModal, ProductList },
  setup() {
    const productList = ref(null);

    const handleProductAdded = () => {
      if (productList.value) {
        productList.value.loadProducts(); 
      }
    };

    return {
      handleProductAdded,
      productList,
    };
  },
};
</script>
<template>
  <div class="admin-view">
    <ProductFormModal @producto-agregado="handleProductAdded" /> 
    <ProductList ref="productList" />
  </div>
</template>

