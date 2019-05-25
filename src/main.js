import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '../store/index'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

// Configurar Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAV_q6qX8LMwguPPw52z2luXjeWOiKZWdI'
  }
})

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
