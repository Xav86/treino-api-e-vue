<template>
  <div class="container">
      <h1>Login</h1>
      <div v-if="error" class="tamanho-total">
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <img src="../assets//error-icon.svg" alt="icone de erro">
          <div class="space-icon">
            {{ error }}
          </div>
        </div>
       </div>
      <div class="box">
          <label for="email" class="lable">Email:</label>
          <input class="form-control" type="email" id="email" name="email" v-model="email" placeholder="email@email.com">
          
          <label for="password" class="lable">Senha:</label>
          <input class="form-control" type="password" id="password" name="password" v-model="password" placeholder="******">
          
          <button class="btn btn-primary" @click="login">logar</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: undefined
        }
    },
    methods: {
        async login() {
            try {
                const res = await axios.post('http://localhost:4343/login', {
                    email: this.email,
                    password: this.password
                });
                localStorage.setItem('token', res.data.token);
                this.$router.push({name: 'home'})
            } catch(error) {
                console.log(error);
                this.error = error.response.data.error;
            }
        },
    }
}
</script>

<style>
    .container {
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 7%;
    }

    .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #e3e3e3;
        border-radius: 10px;
        
        padding: 10px 20px 20px;
        gap: 7px;
    }

    
    .tamanho-total {
      width: 100%;
    }

    .space-icon {
      margin-left: 7px;
    }
</style>