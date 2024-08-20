<template>
  <div class="container">
    <h1>Cadastro</h1>
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from '../components/FormComponent.vue';

export default {
    components: {
        FormComponent
    }
}
</script>

<style>
    h1 {
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
</style>