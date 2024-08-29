<template>
    <div class="container">
      <h1>Cadastro</h1>
      <!-- Ouvir o evento 'formSubmit' emitido pelo FormComponent -->
       <div v-if="error">
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <img src="../assets//error-icon.svg" alt="icone de erro">
          <div class="space-icon">
            {{ error }}
          </div>
        </div>
       </div>
      <FormComponent @formSubmit="register" />
    </div>
  </template>
  
  <script>
  import FormComponent from '../components/FormComponent.vue';
  import axios from 'axios';
  
  export default {
    name: 'RegisterView',
    components: {
      FormComponent
    },
    data() {
      return {
        error: undefined
      };
    },
    methods: {
      async register(data) {
        try {
            await axios.post('http://localhost:4343/user', {
                name: data.name,
                email: data.email,
                password: data.password
            });
            alert('Usuário cadastrado com sucesso!')
            this.$router.push({name: 'UsersView'})
        } catch(error) {
            this.error = error.response.data.error;
        }   
      }
    }
  }
  </script>  

<style scoped>
    h1 {
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .space-icon {
      margin-left: 7px;
    }
</style>