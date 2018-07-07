import axios from 'axios'

const state = {
  bubble: null,
  bubbles: []
}

const mutations = {
  'SET_BUBBLES'(state, bubbles) {
    state.bubbles = bubbles
  },
  'SET_BUBBLE' (state, bubble) {
    state.bubble = bubble
  }
}

const actions = {
  loadBubbles: ({commit}) => {
    axios.get('/bubbles.json')
      .then((response) => {
        let localBubbles = []
        for (let key in response.data) {
          localBubbles.push({
            id: key,
            ...response.data[key]
          })
        }
        commit('SET_BUBBLES', localBubbles)
      })
      .catch((error) => {
        console.info('error', error)
      })
  },
  getBubble: ({commit}, bubbleId) => {
    axios.get('/bubbles/' + bubbleId + '.json')
      .then((response) => {
        console.log('response.data', response.data)
        commit('SET_BUBBLE', response.data)
      })
      .catch((error) => {
        console.info('error', error)
      })
  }
}

const getters = {
  bubbles: () => {
    return state.bubbles
  },
  bubble: (bubbleId) => {
    return state.bubble
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
