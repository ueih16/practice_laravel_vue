import axios from 'axios'
import store from './store'
import router from './router/index.js'

const axiosClient = axios.create({
    baseURL: `http://practice_laravel_vue.test/api`
})

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config
})

export default axiosClient
