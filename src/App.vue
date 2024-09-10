<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  
    <Header/>
    <router-view />
    <Footer />
 
</template>



<style>

</style>
