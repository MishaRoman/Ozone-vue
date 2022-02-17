<template>
  <div class="v-catalog">
    <main>
      <div class="container">
        <div class="row">
          <v-filter v-model="checked" />
          <div class="col-12 col-lg-9 col-xl-10">
            <div class="container">
              <div class="row no-gutters goods">
                <v-catalog-item
                  v-for="product in products"
                  :key="product.id"
                  :product_data="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import vFilter from '../layouts/v-filter'
  import vCatalogItem from './v-catalog-item'
  import store from '@/vuex/store'

  export default {
    name: 'v-catalog',
    components: {
      vFilter,
      vCatalogItem,
    },
    
    data() {
      return {
        checked: false,
      }
    },
    computed: {
      products() {
        if (this.checked) {
          return store.getters.SORTED_PRODUCTS.filter(p => p.sale)
        } else {
          return store.getters.SORTED_PRODUCTS
        }
      }
    },
    mounted() {
      store.dispatch('GET_PRODUCTS_FROM_API')
      store.dispatch('GET_CATEGORIES_FROM_API')
    }
  }
</script>