<script>
  import axios from 'axios';
  
  export default {
    props: {
      productId: {
        type: Number,
        required: true,
      },
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click(); 
      },
      
      async onFileChange(event) {
        const file = event.target.files[0]; 
  
        if (!file) {
          console.error('No se seleccionó ningún archivo.');
          return;
        }
  
        const formData = new FormData();
        formData.append('file', file); 
        try {
          const response = await axios.post(`http://localhost:8080/api/v1/productos/${this.productId}/imagen`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
            withCredentials: true, 
          });
  
          console.log('Respuesta del servidor:', response.data);
          this.$emit('imagen-cambiada'); 
        } catch (error) {
          console.error('Error al cambiar la imagen:', error);
        }
      },
    },
  };
  </script>
  
  <template>
    <div>
      <img src="./icons/Photo.svg" alt="Subir imagen" @click="triggerFileInput" style="cursor: pointer; width: 50px; height: 50px;" />
        <input type="file" ref="fileInput" @change="onFileChange" style="display: none;" />
    </div>
  </template>
  
  <style scoped>

  </style>
  