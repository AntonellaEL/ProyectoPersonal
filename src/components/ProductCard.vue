<template>
  <div class="product-card">
    <h3>{{ producto.nombre }}</h3>
    <p>Precio: {{ producto.precio }}€</p>
    <p>Material: {{ producto.material }}</p>
    <p>Categoria: {{ producto.categoria }}</p>
    <p>Subcategoria: {{ producto.subcategoria }}</p>
    <p>Pasillo: {{ producto.pasillo }}</p>
    <p>Estanteria: {{ producto.estanteria }}</p>
  </div>
</template>

<script>
export default {
  props: {
    producto: Object
  }
}
</script>

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
  aspect-ratio: 1 / 1; /* Mantiene las tarjetas cuadradas */
  overflow: hidden;
  min-height: 200px; 
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
