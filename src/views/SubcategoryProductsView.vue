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
      subcategory: null,
    };
  },
  async mounted() {
    this.category = this.$route.params.category;
    this.subcategory = this.$route.params.subcategory;
    await this.fetchProductos();
  },
  methods: {
    async fetchProductos() {
      const response = await fetch(`http://localhost:8080/api/v1/productos/categoria/subcategoria?categoria=${this.category}&subcategoria=${this.subcategory}`);
      this.productos = await response.json();
    },
  },
};
</script><template>
  <div class="products-by-subcategory-view">
    <h2> {{ subcategory }} de {{ category }}</h2>
    <div class="product-card-container">
      <ProductCard
        v-for="(producto, index) in productos"
        :key="index"
        :producto="producto"
      />
    </div>
  </div>
</template>

<style>
.product-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  padding: 0; 
  margin: 0; 
  width: 100%;
  box-sizing: border-box;
}

.product-card {
  color: black;
  font-size: 2vh;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  flex: 1 1 calc(25% - 10px); 
  box-sizing: border-box;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .product-card {
    flex: 1 1 calc(50% - 10px); 
  }
}

@media (max-width: 768px) {
  .product-card {
    flex: 1 1 calc(100% - 10px); 
  }
}

@media (max-width: 480px) {
  .product-card {
    flex: 1 1 calc(100% - 10px);
  }
}
</style>


  