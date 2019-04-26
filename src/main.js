
import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterConfig from 'js/common/router-config.js';

import App from './App.vue';

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: new VueRouter(RouterConfig)
}).$mount('#app');