<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; 
import { useRouter } from 'vue-router'; 

export default {
  setup() {
    const authStore = useAuthStore(); 
    const username = ref('');
    const password = ref('');
    const errorMessage = ref(''); 
    const router = useRouter(); 

    async function login() {
      errorMessage.value = ''; 

      if (username.value && password.value) {
        const response = await authStore.login(username.value, password.value);
        
        if (response.isAuthenticated) {
          router.push({ name: 'admin' });
        } else {
          errorMessage.value = 'Usuario o contraseña incorrecta';
        }
      } else {
        errorMessage.value = 'Por favor, completa todos los campos.';
      }
    }

    return {
      username,
      password,
      errorMessage,
      login,
      authStore, 
    };
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="login"> 
        <label for="username">Usuario</label>
        <input type="text" v-model="username" id="username" placeholder="Introduce tu usuario" autocomplete="username" />

        <label for="password">Contraseña</label>
        <input type="password" v-model="password" id="password" placeholder="Introduce tu contraseña" autocomplete="current-password" />

        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>

        <button type="submit">Iniciar sesion</button> 
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  font-family: jomhuria;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background-color: #d3d3d3;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
  height: 400px;
}

input {
  width: 90%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #3b3b3b;
  color: white;
  padding: 10px;
  border: none;
  width: 45%;
  border-radius: 4px;
  cursor: pointer;
}

label {
  color: #5a5a5a;
  font-size: 30px;
}

button:hover {
  background-color: #5a5a5a;
}

.error-message {
  color: red;
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
