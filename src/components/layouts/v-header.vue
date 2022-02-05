<template>
  <header>
    <nav>
      <div class="container">
      <div class="row">
        <div class="col">
        <div class="navbar-wrapper d-flex justify-content-between align-items-center">
          <a class="logo" href="/"></a>
          <div class="d-flex control-wrapper">
            <div class="catalog-button">
              <button>
              <span class="catalog-button_burger"></span><span class="catalog-button_text">Каталог</span>
              </button>
              <div class="catalog">
              <ul class="catalog-list">
                <li>Игровая приставка</li>
                <li>Периферия для ПК</li>
                <li>Игры и софт</li>
              </ul>
              </div>
            </div>
            <div class="search">
              <div class="search-wrapper">
              <input class="search-wrapper_input" type="text" />
              </div>
              <div class="search-btn">
              <button></button>
              </div>
            </div>
          </div>
          <a href="#" id="cart" @click="openCart">
            <span class="counter">0</span>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="nonzero"
                d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z">
              </path>
              </svg></span>
            <span class="desc">Корзина</span>
          </a>
        </div>
        </div>
      </div>
      </div>
    </nav>
    <v-cart 
      v-if="this.show"
      @closeCart="closeCart"
    />
  </header>
</template>

<script>
  import vCart from '../v-cart'
  export default {
    name: 'v-header',
    data() {
      return {
        show: false
      }
    },
    components: {
      vCart
    },
    methods: {
      openCart() {
        this.show = true
      },
      closeCart() {
        this.show = false
      }
    },
  }
  
</script>