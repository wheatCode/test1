import Vue from 'vue';
import App from './App.vue';
import router from './package/router';
import './package/bootstrap';
import './package/axios';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');