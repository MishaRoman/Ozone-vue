<template>
  <div class="catalog-button">
    <button @click.prevent="areCategoriesVisible = !areCategoriesVisible">
      <span class="catalog-button_burger"></span>
      <span class="catalog-button_text">
        Категории
      </span>
    </button>
    <div class="catalog" v-if="areCategoriesVisible">
      <ul class="catalog-list">
        <li
          v-for="category in categories"
          :key="category.id"
          @click="selectCategory(category)"
        >{{category.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-select',
    data() {
      return {
        areCategoriesVisible: false
      }
    },
    props: {
      categories: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      selectCategory(category) {
        this.$emit('selectCategory', category)
        this.areCategoriesVisible = false
      },
      hideSelect() {
        this.areCategoriesVisible = false
      }
    }
  }

</script>
