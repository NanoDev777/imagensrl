import axios from 'axios'

const state = {
  user: null,
  authenticated: false,
  token: null,
  expiration: null
}

const mutations = {
  SAVE_TOKEN(state, data) {
    localStorage.setItem('token', data)
    state.token = data
    state.authenticated = true
  },

  SAVE_EXPIRATION(state, expires) {
    state.expiration = expires
  },

  SET_CURRENT_USER(state, data) {
    state.user = data
  },

  LOGOUT(state) {
    localStorage.removeItem('token')
    state.token = null
    state.user = null
    state.authenticated = false
    state.expiration = null
  }
}

const actions = {
  saveToken({commit}, token) {
    commit('SAVE_TOKEN', token)
  },

  saveExpiration({commit}, expires) {
    commit('SAVE_EXPIRATION', expires)
  },

  saveUser({commit}, user) {
    commit('SET_CURRENT_USER', user)
  },

  async cleanSession ({ commit }) {
    try {
      commit('LOGOUT')
    } catch (e) { }
  },

  async logout ({ commit }) {
    try {
      await axios.post('/api/logout')
    } catch (e) { }
    commit('LOGOUT')
  }
}

const getters = {
  currentUser: (state) => {
    return state.user
  },

  authenticated: (state) => {
    return state.authenticated
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
