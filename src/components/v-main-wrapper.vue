<template>
  <div class="v-main-wrapper">
    <v-catalog />
  </div>
</template>

<script>
  import vCatalog from './catalog/v-catalog'

  export default {
      name: 'v-main-wrapper',
      data() {
        return {
          
        }
      },
      components: {
          vCatalog,
      },
      methods: {
        
      }
  }
</script>