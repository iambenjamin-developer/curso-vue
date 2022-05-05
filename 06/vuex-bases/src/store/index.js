import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    lastMutation: 'Ninguna',
    name: 'Benjamin',
    lastName: 'Correa'
  },
  getters: {
    getFullName(state) {

      return `${state.lastName}, ${state.name}`
    }
  },
  mutations: {
    incrementOne(state) {
      state.count++
      state.lastMutation = 'incrementOne'

    },
    incrementFive(state) {
      state.count += 5
      state.lastMutation = 'incrementFive'

    },
    incrementByValue(state, value) {

      state.count += Number(value)
      state.lastMutation = 'incrementByValue'
    },

  },
  actions: {
  },
  modules: {
  }
})
