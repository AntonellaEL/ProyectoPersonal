<script>
import { ref, onMounted } from 'vue';
import ProductList from '@/components/ProductList.vue';
import ProductFormModal from '@/components/ProductFormModal.vue'; 
import { useProductStore } from '@/stores/productStore';

export default {
  components: {
    ProductList,
    ProductFormModal,
  },
  setup() {
    const store = useProductStore();
    const productos = ref([]);

    const actualizarLista = async () => {
      await store.loadProducts(); 
      productos.value = store.products; 
    };

    onMounted(actualizarLista); 

    return {
      productos,
      actualizarLista,
    };
  },
};
</script>

<template>
  <div class="admin-view">
    <ProductFormModal @producto-agregado="actualizarLista" /> 
    <ProductList :productos="productos" />
  </div>
</template>

<style scoped>
.admin-view {
  padding: 20px;
}
</style>
