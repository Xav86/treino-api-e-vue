<template>
    <div class="cliente">
        <h2>Cliente da página - {{ dados.nome }}</h2>
        <p>{{ descricao }}</p>
        <hr>
        <p>Número do cliente: {{ numero }}</p>
        <p>Email: {{ dados.email }}</p>
        <p>Idade: {{ dados.idade }}</p>
        <ProdutoPage/> 
    </div>
</template>

<script>
import ProdutoPage from './ProdutoPage.vue';

export default {
    name: 'ClientePage',
    components: {
        ProdutoPage
    },
    data(){
        return {
            numero: 23454,
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora quidem molestiae harum rerum ex consequuntur itaque aliquid quo id blanditiis aspernatur perferendis labore at, vel quam. Dolorum, nihil distinctio.'
        }
    },
    props: {
        dados: Object
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
