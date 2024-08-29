<template>
    <div class="container">
      <h1>Edição</h1>
      <!-- Ouvir o evento 'formSubmit' emitido pelo FormComponent -->
       <div v-if="error">
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <img src="../assets//error-icon.svg" alt="icone de erro">
          <div class="space-icon">
            {{ error }}
          </div>
        </div>
       </div>
       <FormComponentEdit v-if="dados" @formSubmit="edit" :dados="dados" />
    </div>
  </template>
  
  <script>
  import FormComponentEdit from '../components/FormComponentEdit.vue';
  import axios from 'axios';
  import { req } from '../assets/utils/authToken';
  
  export default {
    name: 'EditView',
    components: {
      FormComponentEdit
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:4343/user/${this.$route.params.id}`, req());

            this.dados = {ID: res.data.ID, email: res.data.email, name: res.data.name, role: res.data.role}
        } catch(error) {
            console.log(error)
            this.$router.push({name: 'users-list'})
        }
    },
    data() {
      return {
        error: undefined,
        dados: {}
      };
    },
    methods: {
        async edit(data) {
            console.log(axios)
            console.log(data)
            console.log(parseInt(this.$route.params.id))
            try {
            await axios.put('http://localhost:4343/user', {
                id: parseInt(this.$route.params.id),
                name: data.name,
                email: data.email,
                role: data.role
            }, req());
            alert('Usuário alterado com sucesso!')
            this.$router.push({name: 'UsersView'})
        } catch(error) {
            this.error = "error.response.data.error";
            console.log(error)
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