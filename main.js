import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import kzTable from './src/index'

Vue.use(ElementUI)
Vue.use(kzTable)

new Vue({
  el: '#app',
  render: h => h(App)
})