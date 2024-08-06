<template>
  <div class="container">
    <h1>Cadastro:</h1>
    <small v-if="deuErro === true">O nome inserido é inválido, tente novamente!</small>
    <input type="text" placeholder="nome" v-model="nomeField"><br>
    <input type="email" placeholder="email" v-model="emailField"><br>
    <input type="number" placeholder="idade" v-model="idadeField"><br>
    <button @click="cadastrarUsuario">cadastrar</button>
    <hr>
    <h1>Titulo de teste</h1>
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <h1>{{ index + 1 }}</h1>
      <ClientePage :dados="cliente" :showIdade="true" @meDelete="deletarUsuario($event)"/>
    </div>
  </div>
</template>

<script>
import ClientePage from './components/ClientePage.vue'

export default {
  name: 'App',
  components: {
    ClientePage
  },
  data() {
    return {
      deuErro: false,
      nomeField: '',
      emailField: '',
      idadeField: 0,
      clientes: [
        {
          id: 2,
          nome: 'Gustavo',
          email: 'gustavo@gustavo.com',
          idade: 22
        },
        {
          id: 22,
          nome: 'Caetano',
          email: 'caetano@caetano.com',
          idade: 224
        }
      ],
    }
  },
  methods: {
    cadastrarUsuario: function() {
      if (this.nomeField === '' || this.nomeField === ' ' || this.nomeField.length < 3) {
        this.deuErro = true;
      } else {
        this.clientes.push({id: Date.now(), nome: this.nomeField, email: this.emailField, idade: this.idadeField});
        this.nomeField = '';
        this.emailField = '';
        this.idadeField = 0;
        this.deuErro = false;
      }
    },
    deletarUsuario: function($event) {
      // console.log('Recebendo evento');
      // $event.component.testar();
      // $event.component.isSwap = true;
      const id = $event.id;
      const novoArray = this.clientes.filter(cliente => cliente.id != id);
      this.clientes = novoArray;
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding:  10vh 20vw;
  }
</style>
