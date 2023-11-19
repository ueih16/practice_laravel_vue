import { createStore } from 'vuex'
import axiosClient from '../axios'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('token'),
        }
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data.user)
                    commit('setToken', data.token)
                    return data
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login' ,user)
                .then(({ data }) => {
                    commit('setUser', data.user)
                    commit('setToken', data.token)
                    return data
                })
        }
    },
    mutations: {
        setUser: (state, user) => {
            state.user.data = user
        },
        setToken: (state, token) => {
            state.user.token = token
            sessionStorage.setItem('token', token)
        }
    },
    modules: {},
})

export default store
