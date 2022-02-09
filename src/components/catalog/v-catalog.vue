<template>
  <div class="v-catalog">
    <v-header @sortByCategory="sortByCategory" />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-3 col-xl-2 d-none d-lg-block">
            <div class="filter">
              <div class="filter-title">
                <h5>Фильтр</h5>
              </div>
              <div class="filter-price">
                <div class="filter-price_title">
                  Цена
                </div>
                <form>
                  <div class="filter-price_range">
                    <div class="filter-price_input-wrapper">
                      <label for="min" class="filter-price_label">от</label>
                      <input id="min" class="filter-price_input" v-model.number="minPrice">
                    </div>
                    <div class="filter-price_input-wrapper">
                      <label for="max" class="filter-price_label">до</label>
                      <input id="max" class="filter-price_input" v-model.number="maxPrice">
                    </div>
                    
                  </div>
                  <button class="btn mb-3 mt-1" @click.prevent="sortByPrice">Отфильтровать</button>
                </form>
              </div>
              <div class="filter-check">
                <label class="filter-check_label">
                  <input type="checkbox" value="sale" class="filter-check_checkbox" id="discount-checkbox" v-model="checked">
                  <span class="filter-check_label-text">Акция</span>
                </label>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-9 col-xl-10">
            <div class="container">
              <div class="row no-gutters goods">
                <v-catalog-item
                  v-for="product in sortedProducts"
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
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'v-catalog',
    components: {
      vHeader,
      vCatalogItem,
    },
    
    data() {
      return {
        checked: false,
        minPrice: 0,
        maxPrice: 100000,
      }
    },
    computed: {
      ...mapGetters([
        'SORTED_PRODUCTS',
      ]),
      sortedProducts() {
        if (this.checked) {
          return this.SORTED_PRODUCTS.filter(p => p.sale)
        } else {
          return this.SORTED_PRODUCTS
        }
      },
      
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'GET_CATEGORIES_FROM_API',
        'SORT_BY_CATEGORY',
      ]),
      sortByCategory(category) {
        this.SORT_BY_CATEGORY(category)
      },
      sortByPrice() {
        this.$store.state.sortedProducts = this.SORTED_PRODUCTS.filter(i => i.price >= this.minPrice && i.price <= this.maxPrice)
      }
      
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      this.GET_CATEGORIES_FROM_API()
    }
  }
</script>