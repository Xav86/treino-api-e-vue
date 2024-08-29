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
            <td class="space"><router-link :to="{name: 'EditView', params: {id: user.ID}}"><button class="btn btn-primary">Editar</button></router-link><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="confirmDelete(user.ID)">Deletar</button></td>
        </tr>
    </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="deleteModalModalLabel">Realmente deseja deletar este usuário?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="deleteUser">Deletar</button>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { req } from '../assets/utils/authToken';
import { Modal } from 'bootstrap';

export default {
    name: 'UsersView',
    async created() {

        try {
            const result = await axios.get('http://localhost:4343/user', req());
            // console.log(result);
            this.users = result.data;
        } catch(error) {
            console.log(error);
        }
    },
    data() {
        return {
            users: [],
            userClickedId: -1
        }
    },
    methods: {
        processRole(value) {
            if (value === 0) {
                return 'Usuário comun';
            } else if(value === 1) {
                return 'Administrador';
            } else {
                return 'Cargo indefinido'
            }
        },
        confirmDelete(id) {
            this.userClickedId = id;
            console.log(this.userClickedId)
        },
        async deleteUser() {
            try {
                await axios.delete(`http://localhost:4343/user/${this.userClickedId}`, req());

                alert('Usuário deletado com sucesso!');

                const modalElement = document.querySelector('#deleteModal');
                const modal = Modal.getInstance(modalElement);
                modal.hide();

                modalElement.addEventListener('hidden.bs.modal', () => {
                    document.querySelectorAll('.modal-backdrop')
                            .forEach(el => el.remove());
                });

                try {
                    const result = await axios.get('http://localhost:4343/user', req());
                    console.log(result);
                    this.users = result.data;

                } catch(error) {
                    console.log(error);
                }

            } catch(error) {
                alert('Erro ao deletar usuário!');
                console.log(error);
                console.log(error.response.data);
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