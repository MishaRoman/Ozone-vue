import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

Vue.use(BootstrapVue)