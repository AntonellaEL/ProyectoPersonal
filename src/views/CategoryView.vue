<template>
    <div class="category-view">
      <h2>Productos en la categoría: {{ category }}</h2>
      <div class="card-container">
        <ProductCard
          v-for="(producto, index) in filteredProducts"
          :key="index"
          :producto="producto"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        productos: [],
        category: null,
      };
    },
    computed: {
      filteredProducts() {
        return this.productos.filter(p => p.categoria === this.category);
      },
    },
    async mounted() {
      const response = await fetch('http://localhost:8080/api/v1/productos');
      this.productos = await response.json();
      this.category = this.$route.params.category; // Obtener la categoría desde la ruta
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  </style>
  