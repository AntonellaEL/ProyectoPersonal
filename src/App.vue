<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import ComponentHome from './components/ComponentHome.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ComponentHome
  }
}
</script>

<template>
  <div id="app" class="app-container">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-top: 100px;
  padding-bottom: 50px; 
}
</style>
