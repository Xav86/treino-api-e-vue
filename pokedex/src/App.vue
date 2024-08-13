<template>
  <img src="./assets/600x150.png" alt="Imagem estática" class="image-border">
  <div class="container is-max-desktop">
    <hr>
    <h1 class="is-size-1">Pokedex</h1>
    <button class="button" @click="swapMode">Modo escuro</button>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input type="text" id="search" placeholder="Buscar pokemon pelo nome" v-model="busca" class="input is-rounded">
      </p>
    </div>
    <hr>
    <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
      <PokemonCard :name="poke.name" :url="poke.url" :num="index+1"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './components/PokemonCard.vue';

export default {
  name: 'App',
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemons: [],
      busca: ''
    }
  },
  created: async function(){
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
      this.pokemons = res.data.results;
    } catch(error) {
      console.log(error);
    }
  },
  computed: {
    filteredPokemons() {
      if (this.busca === '') {
        return this.pokemons;
      } else {
        return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.busca.toLowerCase()));
      }

    }
  },
  methods: {
    swapMode: function() {
      const html = document.querySelector('html');
      html.classList.toggle('theme-light');
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .image-border {
    border-radius: 10px;
  }
</style>
