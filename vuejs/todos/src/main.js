import Vue from 'vue'
import App from './App.vue'
import uuid from 'vue-uuid';
 
Vue.use(uuid);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
