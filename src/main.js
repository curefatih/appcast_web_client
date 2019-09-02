import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueProgressiveImage from 'vue-progressive-image'

Vue.config.productionTip = false;
Vue.use(VueProgressiveImage, {
  cache: false
});

import './assets/reset.css';
import './assets/flex.css';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
