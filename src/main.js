/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-05 19:49:24
 * @LastEditTime: 2021-12-05 20:19:14
 * @LastEditors: MArio
 */
import Vue from 'vue'
import App from './App.vue'
import AtComponents from "at-ui"
import 'at-ui-style'
import store from './store'

Vue.config.productionTip = false

Vue.use(AtComponents)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
