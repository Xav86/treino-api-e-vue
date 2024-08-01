<template>
    <div class="cliente">
        <h2>Cliente da página - em um componente</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <ProdutoPage/>
    </div>
</template>

<script>
import ProdutoPage from './ProdutoPage.vue';

export default {
    name: 'ClientePage',
    components: {
        ProdutoPage
    }
}

</script>

<style scoped>

    .cliente {
        display: flex;
        flex-direction: column;
        gap: 7px;
        color: #f2f2f2;
        border-radius: 10px;
        background-color: tomato;
        padding: 10px 20px;
    }

</style>
