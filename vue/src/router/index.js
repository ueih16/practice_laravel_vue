import {  createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'

import store from '../store'

const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: { isGuest:true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/register',
                name: 'Register',
                component: Register,
            },
        ],
    },
    {
        path: '/',
        name: 'Dashboard',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
            }
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(!store.state.user.token && to.meta.requiresAuth) {
        next({ name: 'Login' })
    } else if(store.state.user.token && to.meta.isGuest) {
        next({ name: 'Dashboard' })
    } else {
        next()
    }
})

export default router
