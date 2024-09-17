<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import ComponentHome from './components/ComponentHome.vue'

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
  
    <Header/>

  <ComponentHome/>

    <router-view />
    <Footer />
 
</template>



<style>


</style>
