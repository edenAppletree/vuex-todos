export default {
  namespaced: true,
  state: {
    skins: ''
  },
  mutations: {
    changeColor(state, payload) {
      state.skins = payload
    }
  },
  actions: {
    asyncChangeColor(context, payload) {
      context.commit('changeColor', payload)
    }
  },
  getters: {}
}
