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
import axios from "axios";
import api from "@/config/server";
import echarts from '@/utils/echarts';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

axios.defaults.withCredentials = true

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.API = api
Vue.prototype.echarts = echarts

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
