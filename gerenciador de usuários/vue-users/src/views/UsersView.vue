<template>
  <div class="container">
    <h1>Listagem de usuários</h1>
    <ul class="list-group">
        <li class="list-group-item" v-for="user in users" :key="user.ID">
            {{ user.name }} | {{ user.email }} | {{ user.role }}
        </li>
    </ul>
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
</style>