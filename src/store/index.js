import Vue from 'vue'
import Vuex from 'vuex'

import pathStore from './path'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pathStore,
  },
})

export default store