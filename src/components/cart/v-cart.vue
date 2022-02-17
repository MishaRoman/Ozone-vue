<template>
  <div class="cart">
    <div class="cart-body">
      <div class="cart-title">Корзина</div>
      <div class="cart-total">Общая сумма: <span>{{$store.getters.CART_SUM}}</span> руб</div>

      <div class="cart-wrapper">
        <div
          class="cart-items"
          v-if="$store.getters.CART.length"
        >
          <v-cart-items-list/>
        </div>
        
        <div
          id="cart-empty"
          v-else>
          Ваша корзина пока пуста
        </div>
      </div>
      <button class="btn btn-primary cart-confirm">Оформить заказ</button>
      <div 
        class="cart-close"
        @click="closeCart"
      ></div>
    </div>
  </div>
</template>

<script>
  import vCartItemsList from './v-cart-items-list'
  export default {
    name: 'v-cart',
    components: {
      vCartItemsList
    },
    methods: {
      closeCart() {
        this.$emit('closeCart')
      },
      
    },
  }
</script>