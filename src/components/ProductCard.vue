<script>
export default {
  props: {
    producto: Object
  },
  methods: {
    selectProduct() {
      this.$emit('click', { categoria: this.producto.categoria, subcategoria: this.producto.subcategoria });
    }
  }
}
</script>

<template>
  <div class="product-card" @click="selectProduct">
    <div class="image-container">
      <img :src="producto.img" alt="Imagen del producto" class="product-image" />
    </div>
    <div class="product-details">
      <div class="product-header">
        <h3>{{ producto.nombre }}</h3>
        <h3>{{ producto.precio }}€</h3>
      </div>
      <p class="description">{{ producto.descripcion }}</p>
      <div class="product-location">
        <p>CATEGORIA: {{ producto.categoria }} &nbsp;&nbsp; SUBCATEGORIA: {{ producto.subcategoria }}</p>
        <p>PASILLO: {{ producto.pasillo }} &nbsp;&nbsp; ESTANTERIA: {{ producto.estanteria }} &nbsp;&nbsp; LADO: IZQUIERDO</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background-color: #da9515;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 200px; 
  padding: 15px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.image-container {
  width: 200px;
  height: 200px;
  background-size: cover;;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.product-details {
  text-align: left;
  font-family: jomhuria;
}

.product-header {
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 25px;
  margin-bottom: 15px;
  color: #000000;

}

.product-location {
  font-size: 20px;
  color: #000000;
  line-height: 1.6;
}
</style>
