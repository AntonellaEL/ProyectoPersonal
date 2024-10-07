<script>
import ProductFormModal from '@/components/ProductFormModal.vue';
import ProductList from '@/components/ProductList.vue';
import { ref } from 'vue';

export default {
  components: {
    ProductFormModal,
    ProductList,
  },
  setup() {
    const productListKey = ref(0);

    const handleProductAdded = () => {
      productListKey.value++;
    };

    return {
      handleProductAdded,
      productListKey,
    };
  },
};
</script>

<template>
  <div>
    <ProductFormModal @producto-agregado="handleProductAdded" />
    <ProductList :key="productListKey" />
  </div>
</template>

<style scoped>
.admin-view {
  padding: 20px; 
}
</style>
