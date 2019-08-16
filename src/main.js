import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/reset.css';
import './assets/flex.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
