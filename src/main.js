// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/app.css'

Vue.prototype.$eventHub = new Vue(); // global event bus

Vue.config.productionTip = false

Vue.use(BootstrapVue)

axios.defaults.baseURL = 'https://light-bubble.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'authorization_token'
axios.defaults.headers.get['Accepts'] = 'application/json'

const requestInterceptor = axios.interceptors.request.use((config) => {
  console.log('interceptors config', config)
  return config
})

const responseInterceptor = axios.interceptors.response.use((response) => {
  console.log('interceptors response', response)
  return response
})

axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
