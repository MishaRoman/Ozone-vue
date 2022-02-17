<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card">
      <div class="card-img-wrapper">
        <span class="card-img-top"
          :style='{ backgroundImage: "url(" + product_data.img + ")" }'></span>
      </div>
      <div class="card-body justify-content-between">
        <div class="card-price">{{product_data.price}} ₽</div>
        <h5 class="card-title">{{product_data.title}}</h5>
        <button
          class="btn btn-primary"
          @click="addToCart"
        >В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    name: 'v-catalog-item',
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        store.dispatch('ADD_PRODUCT_TO_CART', this.product_data)
      }
    }
  }
</script>