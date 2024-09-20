<script>
import CategoryCard from '../components/CategoryCard.vue';

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      productos: [],
    };
  },
  computed: {
    uniqueCategories() {
      const categorias = this.productos.map(producto => producto.categoria);
      const unique = [...new Set(categorias)];
      console.log("Categorías únicas:", unique);
      return unique;
    },
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/productos');
        this.productos = await response.json();
        console.log("Productos:", this.productos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    },
    getCategoryImage(categoria) {
      const producto = this.productos.find(p => p.categoria === categoria);
      return producto ? producto.img : 'ruta/a/imagen/por/defecto.png'; // Imagen por defecto si no se encuentra
    },
    selectCategory(categoria) {
      this.$router.push({ name: 'category', params: { category: categoria } });
    },
  },
  mounted() {
    this.fetchProductos();
  },
};
</script>
<template>
  <div class="products-view">
    <h1>Categorías de Productos</h1>
    <div class="card-container">
      <CategoryCard
        v-for="(categoria, index) in uniqueCategories"
        :key="index"
        :categoria="categoria"
        :imagen="getCategoryImage(categoria)" 
        @click="selectCategory(categoria)"
      />
    </div>
  </div>
</template>



<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
