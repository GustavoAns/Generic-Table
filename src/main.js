import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import GenericCrud from './components/GenericCrud.vue'
import TableFilters from './components/TableFilters.vue'
import TableEdit from './components/TableEdit.vue'
import TableCreate from './components/TableCreate.vue'

Vue.config.productionTip = false
Vue.component('GenericCrud',GenericCrud)
Vue.component('TableFilters',TableFilters)
Vue.component('TableEdit',TableEdit)
Vue.component('TableCreate',TableCreate)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
