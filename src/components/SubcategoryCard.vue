<script>
export default {
  props: {
    subcategoria: {
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
  <div class="subcategory-card" @click="$emit('click')">
    <img :src="imagen" alt="Imagen de la SUBCATEGORIA" class="category-image" />
    <p>{{ subcategoria }}</p>
  </div>
</template>
  
  <style scoped>
 .subcategory-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    padding: 0; 
    margin: 0; 
    width: 100%; 
    box-sizing: border-box;
  }
  
  .subcategory-card {
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
  
  
  @media (max-width: 1024px) {
    .subcategory-card {
      flex: 1 1 calc(50% - 10px); 
    }
  }
  
  @media (max-width: 768px) {
    .subcategory-card {
      flex: 1 1 calc(100% - 10px); 
    }
  }
  
  
 
  @media (max-width: 480px) {
    .subcategory-card {
      flex: 1 1 calc(100% - 10px);
    }
  }
  </style>
  