<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        alert(`Bienvenido, ${this.username}`);
      } else {
        alert("Por favor, completa todos los campos.");
      }
    }
  }
};
</script>

<template>
    <div class="login-container">
      <div class="login-box">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" placeholder="Introduce tu username" />
  
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="Introduce tu password" />
  
        <button @click="login">Login</button>
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
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
  }
  
  input {
    width: 100%;
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
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
  }

  label{
    color:#5a5a5a;
    font-size: 30px;
  }
  
  button:hover {
    background-color: #5a5a5a;
  }
  </style>