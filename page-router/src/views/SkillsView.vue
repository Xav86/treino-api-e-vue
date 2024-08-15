<template>
  <div class="container">
    <ul class="list-group">
        <li class="list-group-item">{{ Skills.HTML }}</li>
        <li class="list-group-item">{{ Skills.CSS }}</li>
        <li class="list-group-item">{{ Skills.JavaScript }}</li>
        <li class="list-group-item">{{ Skills.NodeJs }}</li>
        <li class="list-group-item">{{ Skills.TypeScipt }}</li>
        <li class="list-group-item">{{ Skills.ExpressJs }}</li>
    </ul>

    <hr>

    <input type="text" placeholder="Deixe um comentário!" class="form-control"><br>
    <button class="btn btn-primary full-button" @click="alertar">Enviar</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.num);
  },
  data() {
    return {
      Skills: {
        HTML: 'HTML',
        CSS: 'CSS',
        JavaScript: 'JavaScript',
        NodeJs: 'NodeJs',
        TypeScipt: 'TypeScipt',
        ExpressJs: 'ExpressJs'
      }
    }
  },
  methods: {
    alertar: function() {
      alert('Você enviou o formulário!');
    }
  }

}
</script>

<style>
  .full-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
</style>