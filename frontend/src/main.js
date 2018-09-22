// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
const api = process.env.API_HOST
const cdn = process.env.CDN

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: { apiUrl: api, cdnUrl: cdn }
})
