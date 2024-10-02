<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SearchForm',
  setup() {
    const searchQuery = ref('');
    const router = useRouter();

    const searchProducts = () => {
      if (searchQuery.value) {
        router.push({ name: 'searchResults', query: { name: searchQuery.value } });
      }
    };

    const startVoiceRecognition = () => {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          searchQuery.value = transcript; 
          searchProducts(); 
        };

        recognition.onerror = (event) => {
          console.error('Error en el reconocimiento: ', event.error);
        };

        recognition.start(); 
      } else {
        console.log('El navegador no soporta Speech Recognition.');
      }
    };

    return {
      searchQuery,
      searchProducts,
      startVoiceRecognition,
    };
  },
};
</script>

<template>
  <div class="search-container">
    <div class="search-input-container">
      <input
        type="text"
        v-model="searchQuery"
        class="form-control search-input"
        placeholder="Busca tu artículo..."
      />
      <img 
        src="@/components/icons/microphone.svg" 
        alt="Micrófono" 
        class="mic-button" 
        @click="startVoiceRecognition"
      />
      <img 
        src="@/components/icons/Search.svg" 
        alt="Buscar" 
        class="search-button" 
        @click="searchProducts"
      />
    </div>
  </div>
</template>
<style scoped>
.search-container {
  display: flex;
  justify-content: center;  
  align-items: center;     
  width: 100%;
  margin: 20px 0;
}

.search-input-container {
  position: relative;
  width: 100%;
  max-width: 500px; 
}

.search-input {
  width: 100%;
  background-color: #e9830f;
  padding: 10px 50px;
  font-size: 30px;
  border: 1px solid #797878;
  outline: none;
  font-family: jomhuria;
  border-radius: 20px; 
}


.mic-button {
  position:absolute;
  left: 10px; 
  top: 50%; 
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px; 
  height: 30px;
}

.search-button {
  position: absolute;
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%); 
  cursor: pointer;
  width: 50px; 
  height: 40px;
}

/* Placeholder */
::placeholder {
  font-family: jomhuria;
  color: black;
  font-size: 30px; 
}

@media (max-width: 768px) {
  .search-input {
    padding: 10px 40px;
    font-size: 25px;
  }

  .mic-button, .search-button {
    width: 25px;
    height: 25px;
  }

  ::placeholder {
    font-size: 25px;
  }
}

@media (max-width: 480px) {
  .search-input {
    padding: 8px 30px; 
    font-size: 20px;
  }

  .mic-button, .search-button {
    width: 20px;
    height: 20px;
  }

  ::placeholder {
    font-size: 20px;
  }
}
</style>