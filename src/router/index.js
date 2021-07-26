import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "state" */ '../views/State.vue')
    }
    // {
    //     path: '/binding',
    //     name: 'Binding',
    //     component: () => import(/* webpackChunkName: "binding" */ '../views/Binding.vue')
    // },
    // {
    //     path: '/state',
    //     name: 'State',
    //     component: () => import(/* webpackChunkName: "state" */ '../views/State.vue')
    // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
