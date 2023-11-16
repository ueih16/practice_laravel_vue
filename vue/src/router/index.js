import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'
import Login from '../views/Login.vue'


const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
