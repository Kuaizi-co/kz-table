import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import kzTable from './kz-table'

Vue.use(ElementUI);

Vue.component(kzTable.name, kzTable)

new Vue({
  el: '#app',
  render: h => h(App)
})