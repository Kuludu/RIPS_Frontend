import Vue from 'vue';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import VueRouter from 'vue-router';
import axios from "axios";
import api from "@/config/server";
import echarts from '@/utils/echarts';
import routes from '@/utils/router';

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
  routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
