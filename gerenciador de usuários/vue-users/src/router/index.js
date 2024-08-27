import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import axios from 'axios'
import UsersView from '../views/UsersView.vue'

async function AdminAuth(to, from, next) {
  if (localStorage.getItem('token')) {

    const req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    try {
      await axios.post('http://localhost:4343/validate', {}, req);
      next();
    } catch(error) {
      console.log(error)
      next('/login')
    }

  } else {
    next('/login');
  }
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/register',
        name: 'cadastro',
        component: RegisterView
      },
      {
        path: '/users',
        name: 'users-list',
        component: UsersView
      }
    ],
    beforeEnter: AdminAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
