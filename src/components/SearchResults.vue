<script>
  import ProductCard from './ProductCard.vue';
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router'; 
  
  export default {
    name: "SearchResults",
    components: {
      ProductCard,
    },
    props: {
      searchQuery: String,
    },
    setup(props) {
      const products = ref([]);
      const router = useRouter(); 
  
      const fetchProducts = async () => {
        if (props.searchQuery) {
          const response = await axios.get(`http://localhost:8080/api/v1/productos/search?nombre=${encodeURIComponent(props.searchQuery)}`);
          products.value = response.data;
        }
      };
  
      const goToCategories = () => {
        router.push({ name: 'products' }); 
      };
  
      onMounted(fetchProducts);
      watch(() => props.searchQuery, fetchProducts);
  
      return {
        products,
        goToCategories, 
      };
    },
  };
  </script>

<template>
    <div>
      <h2>Resultados de Búsqueda para "{{ searchQuery }}"</h2>
      <div class="product-cards">
        <ProductCard v-for="producto in products" :key="producto.id" :producto="producto" />
      </div>
      <p v-if="!products.length && searchQuery">No tenemos "{{ searchQuery }}" en este momento.</p>
      <button v-if="!products.length" @click="goToCategories" class="btn btn-secondary">
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
  