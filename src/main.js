

import Vue from 'vue'
import App from './App.vue'
import AtComponents from "at-ui"
import "animate.css";
import 'at-ui-style'
import store from './store'


Vue.config.productionTip = false

Vue.use(AtComponents)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
