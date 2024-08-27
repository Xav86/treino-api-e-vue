<template>
  <div class="container">
    <h1>Listagem de usuários</h1>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">email</th>
            <th scope="col">cargo</th>
            <th>ações</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users" :key="user.ID">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{processRole(user.role)}}</td>
            <td class="space"><button class="btn btn-primary">Editar</button><button class="btn btn-danger">Excluir</button></td>
        </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UsersView',
    async created() {
        const req = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        try {
            const result = await axios.get('http://localhost:4343/user', req);
            console.log(result);
            this.users = result.data;
        } catch(error) {
            console.log(error);
        }
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
        processRole: function(value) {
            if (value === 0) {
                return 'Usuário comun';
            } else if(value === 1) {
                return 'Administrador';
            } else {
                return 'Cargo indefinido'
            }
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;
    }

    .space {
        display: flex;
        flex-direction: row;
        gap: 7px
    }
</style>