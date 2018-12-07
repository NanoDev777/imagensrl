const state = {
  billboard: null
}

const mutations = {
  SAVE_BILLBOARD(state, data) {
    state.billboard = data
  }
}

const actions = {
  saveBillboard({commit}, token) {
    commit('SAVE_BILLBOARD', token)
  }
}

const getters = {
  getBillboard: (state) => {
    return state.billboard
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
