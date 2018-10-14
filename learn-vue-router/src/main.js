import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

Vue({
  dl: '#app',
  router,
  template: '<App/>'
})
