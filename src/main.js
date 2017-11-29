import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
