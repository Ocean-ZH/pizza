import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimesCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://v-pizza.firebaseio.com/';
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
