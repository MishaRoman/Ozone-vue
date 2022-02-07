import axios from 'axios'

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:3000/products', {
      method: 'GET'
    })
    .then((products) => {
      commit('SET_PRODUCTS_TO_STATE', products.data)
      return products
    })
    .catch((error) => {
      console.log(error)
      return error
    })
  },
  GET_CATEGORIES_FROM_API({commit}) {
    return axios('http://localhost:3000/categories', {
      method: 'GET'
    })
    .then((categories) => {
      commit('SET_CATEGORIES_TO_STATE', categories.data)
      return categories
    })
    .catch((error) => {
      console.log(error)
      return error
    })
  },
  ADD_PRODUCT_TO_CART({commit}, product) {
    commit('ADD_TO_CART', product)
  },
  REMOVE_PRODUCT_FROM_CART({commit}, index) {
    commit('REMOVE_FROM_CART', index)
  },
  INCREMENT_CART_ITEM({commit}, index) {
    commit('INCREMENT_CART_ITEM', index)
  }
}