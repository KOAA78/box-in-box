/*
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-04-04 22:12:14
 */
import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './apis/index.js'

import VueRouter from 'vue-router'
import router from './router/router'

import vuetify from './plugins/vuetify' //首字母V改小写（原理待研究
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

import { Notification, Upload, Loading, Image} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vconsole from "vconsole";

import Vuex from 'vuex'


//开发环境使用，生产环境取消
// if (process.env.NODE_ENV == "development") {
//   new Vconsole();
// }

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.prototype.$notify = Notification;

Vue.use(VueAxios, axios)

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
//NOTE: 解决子路由无法跳转
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(vuetify)
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})
Vue.use(Upload);
Vue.use(Loading);
Vue.use(Image);
Vue.use(Vuex)


new Vue({
  render: h => h(App),
  router,
  axios,
  vuetify
}).$mount('#app')
