import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import message from './modules/message'
import billboard from './modules/billboard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    message,
    billboard
  },
  plugins: [createPersistedState()]
})
