<script>
import SearchForm from '@/components/SearchForm.vue'; 

export default {
  name: 'Header',
  components: {
    SearchForm, 
  },
};
</script>

<template>
  <header class="header">
    <router-link to="/" class="logo-link">
      <div class="logo-container">
        <img src="../../public/Market Square.svg" alt="FiB logo" class="logo" />
        <h2 class="logo-title">FiB</h2>
      </div>
    </router-link>
    <SearchForm />
  </header>
</template>

<style scoped>
.header {
  background-color: #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 8px 20px; 
  height: 80px; 
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logo-link {
  text-decoration: none; 
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.logo-title {
  font-size: 80px; 
  margin: 0;
  color: black;
  font-family: jomhuria;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column; 
    height: auto; 
    padding: 15px 20px; 
  }

  .logo-container {
    margin-bottom: 10px; 
  }

  .logo {
    width: 40px;
  }

  .logo-title {
    font-size: 35px; 
  }
}

@media (max-width: 480px) {
  .logo {
    width: 35px; 
  }

  .logo-title {
    font-size: 30px; 
  }
}
</style>
