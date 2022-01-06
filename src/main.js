import Vue from 'vue';
import App from './App.vue';
import Default from "@/components/Default";
import LineStatus from "@/components/LineStatus";
import SiteStatus from "@/components/SiteStatus";
import Situation from "@/components/Situation";
import Login from "@/components/Login";
import Parameter from "@/components/Parameter";
import Demo from "@/components/Demo";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import VueRouter from 'vue-router';
import ECharts from "vue-echarts";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '/line',
      name: 'line',
      component: LineStatus
    },
    {
      path: '/site',
      name: 'site',
      component: SiteStatus
    },
    {
      path: '/situation',
      name: 'situation',
      component: Situation
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/parameter',
      name: 'parameter',
      component: Parameter
    },
    {
      path: '/admin/demo',
      name: 'demo',
      component: Demo
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
