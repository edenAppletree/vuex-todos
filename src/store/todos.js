export default {
  namespaced: true,
  state: {
    todolist: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    delList(state, payload) {
      state.todolist = payload
    },
    addList(state, payload) {
      state.todolist.push(payload)
    }
  },
  actions: {
    asyncdelList(context, payload) {
      context.commit('delList', payload)
    },
    asyncaddList(context, payload) {
      context.commit('addList', payload)
    }
  }
}
