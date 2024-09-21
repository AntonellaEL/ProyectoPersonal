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
    <img :src="`/images/${producto.img}`" alt="Imagen del producto" class="product-image" />
    <h3>{{ producto.nombre }}</h3>
    <p>Precio: {{ producto.precio }}€</p>
    <p>Descripción: {{ producto.descripcion }}</p>
    <p>Pasillo: {{ producto.pasillo }}</p>
    <p>Estanteria: {{ producto.estanteria }}</p>
  </div>
</template>

<style scoped>
.product-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1 / 1; 
  overflow: hidden;
  min-height: 200px;
}
.product-image {
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}
h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}
p {
  font-size: 16px;
  margin: 4px 0;
  color: #666;
}
</style>

