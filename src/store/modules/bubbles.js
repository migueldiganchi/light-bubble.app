import bubblesData from '../../data/bubbles-data'

const state = {
  bubbles: []
}

const mutations = {
  'SET_BUBBLES'(state, bubbles) {
    state.bubbles = bubbles
  }
}

const actions = {
  loadBubbles: ({commit}) => {
    commit('SET_BUBBLES', bubblesData)
  }
}

const getters = {
  bubbles: () => {
    return state.bubbles
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
