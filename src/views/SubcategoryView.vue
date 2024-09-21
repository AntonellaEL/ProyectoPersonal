<script>
import SubcategoryCard from '../components/SubcategoryCard.vue';

export default {
  components: {
    SubcategoryCard,
  },
  data() {
    return {
      subcategorias: [],
      category: null,
    };
  },
  async mounted() {
    this.category = this.$route.params.category;
    await this.fetchSubcategorias();
  },
  methods: {
    async fetchSubcategorias() {
      const response = await fetch(`http://localhost:8080/api/v1/productos/subcategorias?categoria=${this.category}`);
      this.subcategorias = await response.json();
    },
    selectSubcategory(subcategoria) {
      this.$router.push({ name: 'subcategory-products', params: { category: this.category, subcategory: subcategoria } });
    },
  },
};
</script>

<template>
  <div class="subcategory-view">
    <h2>Subcategorías de {{ category }}</h2>
    <div class="card-container">
      <SubcategoryCard
        v-for="(subcategoria, index) in subcategorias"
        :key="index"
        :subcategoria="subcategoria"
        @click="selectSubcategory(subcategoria)"
      />
    </div>
  </div>
</template>
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}</style>