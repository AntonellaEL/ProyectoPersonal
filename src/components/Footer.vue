<script>
export default {
  name: "Footer",
};
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <img src="./icons/Copyright.svg" alt="Copyright" class="logo" />
        <span>FiB</span>
      </div>
      <img src="./icons/User.svg" alt="User" class="User">
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

  .User{
    float: right;
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
  </style>
  