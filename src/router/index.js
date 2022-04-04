import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exercice1 from '../components/Exercice1.vue'
import Exercice2 from '../components/Exercice2.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/exo1',
    name: 'exercice1',
    component: Exercice1
  },
  {
    path: '/exo2',
    name: 'exercice2',
    component: Exercice2
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
