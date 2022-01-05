import Vue from 'vue'
import App from './App.vue'
import Line from "@/components/Line";
import Login from "@/components/Login";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'default',
      component: {
        template: '<div>Default</div>>'
      }
    },
    {
      path: '/line',
      name: 'line',
      component: Line
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
