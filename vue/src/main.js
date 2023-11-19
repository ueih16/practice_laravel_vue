import './style.css'
import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

import cors from 'cors'

createApp(App)
    .use(cors)
    .use(store)
    .use(router)
    .mount('#app')
