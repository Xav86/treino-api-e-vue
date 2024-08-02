<template>
  <div class="container">
    <h1>Titulo de teste</h1>
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <h1>{{ index + 1 }}</h1>
      <ClientePage :dados="cliente"/>
      <h4>Edição</h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
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
      nomeLegal: 'Gustavo',
      dados: {
        nome: 'Gustavo',
        email: 'gustavo@gustavo.com',
        idade: 22
      },
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
        },
        {
          id: 222,
          nome: 'Calebe',
          email: 'calebe@calebe.com',
          idade: 222
        },
        {
          id: 222,
          nome: 'Calege',
          email: 'calege@calege.com',
          idade: 2222
        }
      ]
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
