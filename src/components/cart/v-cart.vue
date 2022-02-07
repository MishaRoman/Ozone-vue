<template>
  <div class="cart">
    <div class="cart-body">
      <div class="cart-title">Корзина</div>
      <div class="cart-total">Общая сумма: <span>{{cartSum}}</span> руб</div>

      <div class="cart-wrapper">
        <div
          class="cart-items"
          v-if="CART.length"
        >
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
                v-for="(product, i) in CART"
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
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'v-cart',
    methods: {
      ...mapActions([
        'REMOVE_PRODUCT_FROM_CART',
        'INCREMENT_CART_ITEM'
      ]),
      removeFromCart(index) {
        this.REMOVE_PRODUCT_FROM_CART(index)
      },
      closeCart() {
        this.$emit('closeCart')
      },
      incrementCartItem(index) {
        this.INCREMENT_CART_ITEM(index)
      },
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartSum() {
        let result = 0
        for(let i in this.CART) {
          result += this.CART[i].price * this.CART[i].quantity
        }
        return result
      }
    },
  }
</script>