<template>
  <div>
    <div class="card">
      <header class="card-header">
        <h1 class="card-header-title is-size-3 has-text-weight-normal">{{ num }} - {{upper(name)}}</h1>
      </header>
      <div class="card-content">
        <div class="content">
          <figure class="image is-96x96">
            <img
              :src="currentImg"
              alt="Sprite pokemon frente"
            />
          </figure>
          <p>Type: {{ pokemon.type }}</p>
          <small>{{ url }}</small>
        </div>
      </div>
      <footer class="card-footer">
        <button class="card-footer-item" @click="mudarSprite">Girar Sprite</button>
        <button class="card-footer-item" @click="verShine">Ver Shine</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isFront: true,
      isShine: false,
      currentImg: '',
      pokemon: {
        type: '',
        front: '',
        back: '',
        shineBack: '',
        shineFront: ''
      },
      spriteMap: {} // Adiciona um objeto para mapear os sprites
    }
  },
  created: async function() {
    try {
      const res = await axios.get(this.url);
      this.pokemon.type = res.data.types[0].type.name;
      this.pokemon.front = res.data.sprites.front_default;
      this.pokemon.back = res.data.sprites.back_default;
      this.pokemon.shineFront = res.data.sprites.front_shiny;
      this.pokemon.shineBack = res.data.sprites.back_shiny;

      // Inicializa o spriteMap
      this.spriteMap = {
        normalFront: this.pokemon.front,
        normalBack: this.pokemon.back,
        shineFront: this.pokemon.shineFront,
        shineBack: this.pokemon.shineBack
      };

      this.currentImg = this.spriteMap.normalFront;
    } catch (error) {
      console.log(error);
    }
  },
  props: {
      num: Number,
      name: String,
      url: String
  },
  methods: {
    upper: function(item) {
      const newItem = item[0].toUpperCase() + item.slice(1);
      return newItem;
    },
    mudarSprite: function() {
      const spriteType = this.isShine ? 'shine' : 'normal';
      const direction = this.isFront ? 'Back' : 'Front';

      this.currentImg = this.spriteMap[`${spriteType}${direction}`];
      this.isFront = !this.isFront;
    },
    verShine: function() {
      const spriteType = this.isShine ? 'normal' : 'shine';
      const direction = this.isFront ? 'Front' : 'Back';

      this.currentImg = this.spriteMap[`${spriteType}${direction}`];
      this.isShine = !this.isShine;
    }
  }
}
</script>

<style>
  .card-header-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>