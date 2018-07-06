import axios from 'axios'

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
    axios.get('/bubbles.json')
      .then((response) => {
        // console.log(response)
        commit('SET_BUBBLES', response.data)
      })
      .catch((error) => {
        console.info('error', error)
      })
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
