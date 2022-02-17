<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Количество</th>
        <th scope="col">Название</th>
        <th scope="col">Цена</th>
        <th scope="col" class="text-center">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(product, i) in $store.getters.CART"
        :key="product.id"
      >
        <th scope="row">{{product.quantity}}</th>
        <td>{{product.title}}</td>
        <td>{{product.price}} ₽</td>
        <td class="d-flex justify-content-around">
          <a
            class="icon icon-minus"
            @click="removeFromCart(i)"
          >-</a>
          <a
            class="icon icon-plus"
            @click="incrementCartItem(i)"
          >+</a>
        </td>
        
      </tr>
      
    </tbody>
  </table>
</template>

<script>
  import store from '@/vuex/store'
  export default {
    name: 'v-cart-items-list',
    methods: {
      removeFromCart(index) {
        store.dispatch('REMOVE_PRODUCT_FROM_CART', index)
      },
      incrementCartItem(index) {
        store.dispatch('INCREMENT_CART_ITEM', index)
      },
    }
  }
</script>
