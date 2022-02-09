import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'


Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    sortedProducts: [],
    categories: [],
    cart: [],
  },

  actions,
  mutations,
  getters,
});

export default store