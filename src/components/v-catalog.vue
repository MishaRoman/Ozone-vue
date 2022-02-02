<template>
  <main>
    <div class="container">
      <div class="row">
        <v-filter />
        <div class="col-12 col-lg-9 col-xl-10">
					<div class="container">
						<div class="row no-gutters goods">
              <v-catalog-item />
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

export default {
  name: 'v-catalog',
  components: {
    vFilter,
    vCatalogItem,
  }
}
</script>