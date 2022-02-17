import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/css/style.css'

createApp(App)
  .use(store)
  .mount('#app')