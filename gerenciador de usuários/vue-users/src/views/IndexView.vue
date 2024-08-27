<template>
    <div>
        <nav>
            <router-link to="/home">Home</router-link> |
            <router-link to="/register">Cadastro</router-link> |
            <router-link to="/users">Listagem de usuários</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'IndexView'
}
</script>

<style scoped>
    
  nav {
    text-align: center;
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>