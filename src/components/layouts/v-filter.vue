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
              <input id="min" class="filter-price_input">
            </div>
            <div class="filter-price_input-wrapper">
              <label for="max" class="filter-price_label">до</label>
              <input id="max" class="filter-price_input"></div>
          </div>
        </form>
      </div>
      <div class="filter-check">
        <label class="filter-check_label">
          <input type="checkbox" class="filter-check_checkbox" id="discount-checkbox">
          <span class="filter-check_checkmark"></span>
          <span class="filter-check_label-text">Акция</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-filter'
}
</script>