// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import $ from "jquery"
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/bootstrap/js/bootstrap.min"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/theme/index.css";
import "vue2-animate/dist/vue2-animate.min.css";

Vue.use(ElementUI);
Vue.config.productionTip = false


Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
