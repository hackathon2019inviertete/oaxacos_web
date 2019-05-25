import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '../store/index'
import axios from 'axios'

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.config.productionTip = false

const token = localStorage.getItem('user-token')

if (token) {
  axios.defaults.headers.common['x-auth-token'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
