<template>
    <div class="box">
      <label for="name" class="lable">Nome:</label>
      <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Nome do Nome Legal">
      
      <label for="email" class="lable">Email:</label>
      <input class="form-control" type="email" id="email" name="email" v-model="email" placeholder="email@email.com">
      
      <label for="password" class="lable">Senha:</label>
      <input class="form-control" type="password" id="password" name="password" v-model="password" placeholder="******">
      
      <button class="btn btn-primary" @click="submitForm">Cadastrar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // Emitir os dados para o componente pai
        this.$emit('formSubmit', {
          name: this.name,
          email: this.email,
          password: this.password
        });
      }
    }
  }
  </script>  

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: #e3e3e3;
        border-radius: 10px;
        
        padding: 10px 20px 20px;
        gap: 7px;
    }

    .lable {
        font-weight: 600;
    }
</style>