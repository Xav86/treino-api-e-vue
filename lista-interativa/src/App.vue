<template>
  <div class="container">
    <h1>Titulo de teste</h1>
    <ClientePage/>
  </div>
</template>

<script>
import ClientePage from './components/ClientePage.vue'

export default {
  name: 'App',
  components: {
    ClientePage
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
    padding:  10vh 20vw;
  }
</style>
