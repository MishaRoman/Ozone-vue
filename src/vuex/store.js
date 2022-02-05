import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    ADD_TO_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
          product['quantity'] = 1
        }
      } else {
        state.cart.push(product)
        product['quantity'] = 1
      }
      
    },
    REMOVE_FROM_CART: (state, index) => {
      if(state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      } else {
        state.cart.splice(index, 1)
      }
    },
    INCREMENT_CART_ITEM: (state, index) => {
      state.cart[index].quantity++
    }
  },
  actions: {
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
    ADD_PRODUCT_TO_CART({commit}, product) {
      commit('ADD_TO_CART', product)
    },
    REMOVE_PRODUCT_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT_CART_ITEM', index)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  },
});

export default store