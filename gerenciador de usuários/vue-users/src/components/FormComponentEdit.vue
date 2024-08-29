<template>
    <div class="box">
      <label for="name" class="lable">Nome:</label>
      <input class="form-control" type="text" id="name" name="name" v-model="name" placeholder="Nome do Nome Legal">
      
      <label for="email" class="lable">Email:</label>
      <input class="form-control" type="email" id="email" name="email" v-model="email" placeholder="email@email.com">

      <label for="role" class="lable">Cargo:</label>
      <input class="form-control" type="number" id="role" name="role" v-model="role" placeholder="email@email.com">
      
      <button class="btn btn-primary" @click="submitForm">Editar</button>
    </div>
  </template>
  
  <script>
export default {
  props: {
    dados: Object
  },
  data() {
    return {
      name: '',
      email: '',
      role: 0
    };
  },
  watch: {
    dados: {
      handler(newVal) {
        this.name = newVal.name;
        this.email = newVal.email;
        this.role = newVal.role;
      },
      immediate: true
    }
  },
  methods: {
    submitForm() {
      this.$emit('formSubmit', {
        name: this.name,
        email: this.email,
        role: this.role
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