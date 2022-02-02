<template>
  <div class="v-main-wrapper">
    <v-header />
    <v-catalog />
  </div>
</template>

<script>
  import vHeader from './layouts/v-header'
  import vCatalog from './v-catalog'
  export default {
      name: 'v-main-wrapper',
      components: {
          vHeader,
          vCatalog,
      }
  }
</script>