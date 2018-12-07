import './bootstrap'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Snotify from 'vue-snotify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

const options = {
  toast: {
    timeout: 4000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  }
}
Vue.use(Vuetify)
Vue.use(Snotify, options)
Vue.use(VeeValidate)


const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
