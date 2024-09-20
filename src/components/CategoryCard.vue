<template>
    <div class="category-card" @click="$emit('click')">
      <img :src="imagen" alt="Imagen de la categoría" class="category-image" />
      <p>{{ categoria }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categoria: {
        type: String,
        required: true,
      },
      imagen: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  <style >
  .category-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Asegura que las tarjetas se distribuyan por todo el ancho */
    padding: 0; /* Elimina cualquier padding extra del contenedor */
    margin: 0; /* Elimina márgenes que puedan estar causando centrado */
    width: 100%; /* Ocupa todo el ancho disponible */
    box-sizing: border-box;
  }
  
  .category-card {
    color: black;
    font-size: 2vh;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    flex: 1 1 calc(25% - 10px); /* Ajusta el número de tarjetas por fila */
    box-sizing: border-box;
  }
  
  .category-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  /* Media query para pantallas medianas (tabletas) */
  @media (max-width: 1024px) {
    .category-card {
      flex: 1 1 calc(50% - 10px); /* Dos tarjetas por fila en pantallas medianas */
    }
  }
  
  /* Media query para pantallas pequeñas (móviles) */
  @media (max-width: 768px) {
    .category-card {
      flex: 1 1 calc(100% - 10px); /* Una tarjeta por fila en pantallas pequeñas */
    }
  }
  
  
  /* Media query para pantallas extra pequeñas */
  @media (max-width: 480px) {
    .category-card {
      flex: 1 1 calc(100% - 10px);
    }
  }
  </style>
  