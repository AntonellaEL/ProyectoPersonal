<script>
import ProductCard from '../components/ProductCard.vue'; 

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      productos: [],
      loading: true,
      error: false
    };
  },
  created() {
    this.fetchProductos();
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/productos');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        this.productos = data;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<template>
  <div class="products-container">
    <ProductCard v-for="producto in productos" :key="producto.id" :producto="producto" />
  </div>
</template>

<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  padding: 20px;
}

@media (max-width: 1200px) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .products-container {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 600px) {
  .products-container {
    grid-template-columns: 1fr; 
  }
}
</style>
