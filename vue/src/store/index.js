import { createStore } from 'vuex'
import axiosClient from '../axios.js'

const store = createStore({
    state: {
        user: {
            data:{},
            token: null,
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
})

export default store
