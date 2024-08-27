import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import axios from 'axios'

async function AdminAuth(to, from, next) {
  if (localStorage.getItem('token')) {

    const req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    console.log(req);

    try {
      const res = await axios.post('http://localhost:4343/validate', {}, req);
      console.log(res);
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
