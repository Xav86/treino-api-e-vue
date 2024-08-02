<template>
  <div class="container">
    <h1>Titulo de teste</h1>
    <input type="text" v-model="dados.nome">
    <ClientePage :dados="dados"/>
    <ClientePage :dados="dados"/>
    <ClientePage :dados="dados"/>
    <ClientePage :dados="dados"/>
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
      }
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
