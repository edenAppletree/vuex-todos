import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos'
import skin from './skin'
import createVuePersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
    skin
  },
  plugins: [
    createVuePersisted({
      reducer(state) {
        return {
          todos: state.todos,
          skin: state.skin
        }
      }
    })
  ]
})
