import Vue from 'vue'
import Vuex from 'vuex'

import bubbles from './modules/bubbles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bubbles
  }
})
