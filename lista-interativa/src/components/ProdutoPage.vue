<template>
  <div>
    <h3>Meu produto</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <input class="input-produto" type="number" placeholder="Quantidade desejada">
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>
    .input-produto {
        padding: 4px 8px;
        border: 1px solid #f8f8f8;
        background-color: #fff;
        border-radius: 5px;
        outline: none;
    }

    .input-produto[type=number]:focus {
        background-color: lightblue;
    }

</style>