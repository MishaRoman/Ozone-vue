<template>
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
          <input
            id="discount-checkbox"
            type="checkbox"
            value="sale"
            class="filter-check_checkbox"
            :checked="modelValue"
            @change="sort">
          <span class="filter-check_label-text">Акция</span>
        </label>
      </div>
    </div>
  </div>
  
</template>
<script>
  import store from '@/vuex/store'
  export default {
    name: 'v-filter',
    data() {
      return {
        minPrice: 0,
        maxPrice: 100000,
      }
    },
    props: {
      modelValue: Boolean
    },
    methods: {
      sortByPrice() {
        store.dispatch('SORT_BY_PRICE', [this.minPrice, this.maxPrice])
      },
      sort() {
        this.$emit('update:modelValue', !this.modelValue)
      }
    }
  }
</script>