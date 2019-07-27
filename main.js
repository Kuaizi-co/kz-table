import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import kzTable from './src/kz-table'
import kzTableColumn from './src/table-column'

Vue.use(ElementUI)
Vue.component(kzTableColumn.name, kzTableColumn)
Vue.component(kzTable.name, kzTable)

new Vue({
  el: '#app',
  render: h => h(App)
})