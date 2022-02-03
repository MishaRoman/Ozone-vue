<template>
  <main>
    <div class="container">
      <div class="row">
        <v-filter />
        <div class="col-12 col-lg-9 col-xl-10">
					<div class="container">
						<div class="row no-gutters goods">
              <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.id"
                :product_data="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import vFilter from './layouts/v-filter'
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vFilter,
    vCatalogItem,
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>