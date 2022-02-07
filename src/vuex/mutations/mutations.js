import Vue from 'vue'

export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  },
  SET_CATEGORIES_TO_STATE: (state, categories) => {
    state.categories = categories
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
        Vue.set(product, 'quantity', 1)
      }
    } else {
      state.cart.push(product)
      Vue.set(product, 'quantity', 1)
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
}