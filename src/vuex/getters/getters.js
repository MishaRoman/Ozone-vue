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

}