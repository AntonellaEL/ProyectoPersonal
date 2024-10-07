<script>
import ProductCard from './ProductCard.vue';
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import { useProductStore } from '../stores/useProductStore'; 

export default {
  name: "SearchResults",
  components: {
    ProductCard,
  },
  props: {
    searchQuery: String,
  },
  setup(props) {
    const router = useRouter(); 
    const productStore = useProductStore();
    
    onMounted(async () => {
      await productStore.loadProducts(); 
    });

    const filteredProducts = computed(() => {
      return productStore.products.filter(producto => 
        producto.nombre.toLowerCase().includes(props.searchQuery.toLowerCase())
      );
    });

    const goToCategories = () => {
      router.push({ name: 'products' }); 
    };

    return {
      filteredProducts,
      goToCategories,
    };
  },
};
</script>

<template>
  <div>
    <h2>Resultados de Búsqueda para "{{ searchQuery }}"</h2>
    <div class="product-cards">
      <ProductCard v-for="producto in filteredProducts" :key="producto.id" :producto="producto" />
    </div>
    <p v-if="!filteredProducts.length && searchQuery">No tenemos "{{ searchQuery }}" en este momento.</p>
    <button v-if="!filteredProducts.length" @click="goToCategories" class="btn btn-secondary">
      Volver a Categorías
    </button>
  </div>
</template>

<style scoped>
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
