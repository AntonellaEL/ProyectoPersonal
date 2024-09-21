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
  <form @submit.prevent="searchProducts" class="search-form">
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
   
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

::placeholder {
  font-family: jomhuria;
  color: black;
  font-size: 50px;
}

.search-input {
  background-color: #C9C9C9;
  width: 50%;
  padding: 15px;
  font-size: 30px;
  border: 2px solid #ccc;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: jomhuria;
}

.search-button, .mic-button {
  cursor: pointer;
  background-color: #C9C9C9;
}

.search-button {
  width: 50px;
  height: 62px;
}

.mic-button {
  width: 50px;
  height: 62px;
  
}

@media (max-width: 768px) {
  .search-input {
    width: 70%;
    padding: 10px;
    font-size: 25px;
  }

  .search-button, .mic-button {
    width: 40px;
    height: 42px;
  }

  ::placeholder {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .search-input {
    width: 90%;
    padding: 8px;
    font-size: 22px;
  }

  .search-button, .mic-button {
    width: 30px;
    height: 34px;
  }

  ::placeholder {
    font-size: 20px;
  }
}
</style>
