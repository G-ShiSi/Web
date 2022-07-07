// 该文件是整个项目的入口文件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
