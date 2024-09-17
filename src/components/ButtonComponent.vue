<script>
export default {
  methods: {
    handleClick() {
      alert('Productos');   //aqui tengo que meter la ruta de api/v1/productos//
    }
  }
}
</script>

<template>
    <button class="product-button" @click="handleClick">Conoce nuestros productos</button>
</template>
  
<style scoped>
  .product-button {
    background-color: orange;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    font-family: sans-serif;
  }
  .product-button:hover {
    background-color: darkorange;
  }
</style>
  