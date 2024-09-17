<script>
export default {
  name: "Header",
};
</script>

<template>
  <header class="header">
    <img src="../../public/Market Square.svg" alt="FiB logo" class="logo" />
    <h2>FiB</h2>
  </header>
</template>


<style scoped>
.header {
  background-color: #b2b2b2;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 15px;
}

h2 {
  font-size: 80px;
  margin: 0;
  color: black;
  font-family: jomhuria;
}
</style>
