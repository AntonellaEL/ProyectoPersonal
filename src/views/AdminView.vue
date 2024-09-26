<script>
import ProductList from '@/components/ProductList.vue';
import ProductFormModal from '@/components/ProductFormModal.vue'; 

export default {
  components: {
    ProductList,
    ProductFormModal,
  },
};
</script>

<template>
  <div class="admin-view">
    <ProductFormModal /> 

    <ProductList />
  </div>
</template>

<style scoped>
.admin-view {
  padding: 20px;
}
</style>
