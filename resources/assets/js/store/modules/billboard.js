const state = {
  billboard: []
}

const mutations = {
  SAVE_BILLBOARD(state, data) {
    state.billboard = data
  },

  CLEAR_BILLBOARD(state) {
    state.billboard = []
  }
}

const actions = {
  saveBillboard({commit}, data) {
    commit('SAVE_BILLBOARD', data)
  },

  async clearBillboard({ commit }) {
    try {
      commit('CLEAR_BILLBOARD')
    } catch (e) { }
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
