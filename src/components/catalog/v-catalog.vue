<template>
  <div class="v-catalog">
    <v-header @sortByCategory="sortByCategory" />
    <main>
      <div class="container">
        <div class="row">
          <v-filter />
          <div class="col-12 col-lg-9 col-xl-10">
            <div class="container">
              <div class="row no-gutters goods">
                <v-catalog-item
                  v-for="product in filteredProducts"
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
  import vHeader from '../layouts/v-header'
  import vFilter from '../layouts/v-filter'
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'v-catalog',
    components: {
      vHeader,
      vFilter,
      vCatalogItem,
    },
    data() {
      return {
        products: [],
        sortedProducts: [],
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'GET_CATEGORIES_FROM_API'
      ]),
      sortByCategory(category) {
        this.sortedProducts = this.PRODUCTS.filter(cat => cat.category == category.name)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      this.GET_CATEGORIES_FROM_API()
    }
  }
</script>