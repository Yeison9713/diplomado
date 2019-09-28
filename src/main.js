import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import routes  from './routes.js'

// Vue.use(VueRouter);

import Vuefirebase from "firebase";
Vue.config.productionTip = false

Vue.use(Vuefirebase);

// const router = new VueRouter({routes})

new Vue({
  render: h => h(App)
  // router
}).$mount('#app')

