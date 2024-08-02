<template>
    <div :class="{'cliente': !isSwap, 'cliente-swap': isSwap}">
        <h2>Cliente da página - {{ dados.nome }}</h2>
        <p>{{ descricao }}</p>
        <hr>
        <p>Número do cliente: {{ numero }}</p>
        <p>Email: {{ dados.email }}</p>
        <!-- <p v-show="showIdade === true">Idade: {{ dados.idade }}</p> -->
        <p v-if="showIdade === true">Idade: {{ dados.idade }}</p>
        <p v-else-if="showIdade === false">Idade Ocultada</p>
        <p v-else>Erro ao exibir idade</p>
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
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora quidem molestiae harum rerum ex consequuntur itaque aliquid quo id blanditiis aspernatur perferendis labore at, vel quam. Dolorum, nihil distinctio.',
            isSwap: false
        }
    },
    props: {
        dados: Object,
        showIdade: Boolean
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
        background-color: #dc143c;
        padding: 10px 20px;
    }

    .cliente-swap {
        border-radius: 10px;
        color: #2f2f2f;
        background-color: #14dcb4;
        padding: 20px 10px;
    }

</style>
