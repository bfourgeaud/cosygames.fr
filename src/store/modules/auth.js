import { set } from '@/utils/vuex'
import { auth } from '@/api/firebase'

export default {
  namespaced: true,

  state: {
    loggedIn: false,
    user: null,
    error: null,
  },

  actions: {
    login: async ({ commit }, authData) => {
      auth.login(authData)
      .then(data => {
        commit('setLoggedIn', true)
        commit('setUser', data.user)
      })
      .catch(err => {
        commit('setError', err.message)
      })
    },
    register: async ({ commit }, regData) => {
      auth.register(regData)
      .catch(err => {
        commit('setError', err.message)
      })
    },
    logout: async ({ commit }) => {
      auth.logout()
      .then(() => {
        commit('setLoggedIn', false)
        commit('setUser', null)
      })
    },
  },

  mutations: {
    setLoggedIn: set('loggedIn'),
    setUser: set('user'),
    setError: set('error'),
  },
}
