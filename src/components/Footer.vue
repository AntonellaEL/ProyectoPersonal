<script>
import { useRouter } from 'vue-router'; 
import { useAuthStore } from '@/stores/auth'; 

export default {
  name: "Footer",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore(); 

    function goToLogin() {
      router.push('/login'); 
    }

    function logout() {
      authStore.user.isAuthenticated = false;
      authStore.user.username = '';
      authStore.user.password = '';

      router.push('/');
    }

    return {
      goToLogin,
      logout,
      authStore, 
    };
  }
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <img src="./icons/Copyright.svg" alt="Copyright" class="logo" />
      <span>FiB</span>
    </div>
    <div class="user-actions">
      <img 
        src="./icons/Login.svg" 
        alt="Login" 
        @click="goToLogin" 
        class="User" 
        v-if="!authStore.user.isAuthenticated"
      > 
      <img 
        src="./icons/OutLogin.svg" 
        alt="Logout" 
        @click="logout" 
        class="User" 
        v-if="authStore.user.isAuthenticated"
      >
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #b2b2b2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); 
  justify-content: space-between;
}

.User {
  cursor: pointer;
  margin-right: 10px;
}

.footer-content {
  display: flex;
}

.logo {
  width: 30px;
  height: auto;
  margin-right: 5px;
}

span {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.user-actions {
  display: flex; 
}
</style>
