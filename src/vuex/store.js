import { createStore } from "vuex";

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const store = createStore({
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