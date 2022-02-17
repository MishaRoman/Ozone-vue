export default {
  PRODUCTS(state) {
    return state.products
  },
  SORTED_PRODUCTS(state) {
    if (state.sortedProducts.length) {
      return state.sortedProducts
    } else {
      return state.products
    }
  },
  CATEGORIES(state) {
    return state.categories
  },
  CART(state) {
    return state.cart
  },
  CART_SUM(state) {
    let result = 0
    for(let i in state.cart) {
      result += state.cart[i].price * state.cart[i].quantity
    }
    return result
  }

}