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

<template>
    <div class="category-card" @click="$emit('click')">
      <img :src="imagen" alt="Imagen de la categoría" class="category-image" />
      <p>{{ categoria }}</p>
    </div>
  </template>
  
  <style >
  .category-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    padding: 0; 
    margin: 0; 
    width: 100%;
    box-sizing: border-box;
  }
  
  .category-card {
    color: black;
    font-size: 2vh;
    background-color:#c47215; 
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    flex: 1 1 calc(25% - 10px); 
    box-sizing: border-box;
  }
  
  .category-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  
  @media (max-width: 1024px) {
    .category-card {
      flex: 1 1 calc(50% - 10px); 
    }
  }
  
  
  @media (max-width: 768px) {
    .category-card {
      flex: 1 1 calc(100% - 10px); 
    }
  }
  
  

  @media (max-width: 480px) {
    .category-card {
      flex: 1 1 calc(100% - 10px);
    }
  }
  </style>
  