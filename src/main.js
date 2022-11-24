import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import GenericCrud from './components/GenericCrud.vue'
import TableFilters from './components/TableFilters.vue'

Vue.config.productionTip = false
Vue.component('GenericCrud',GenericCrud)
Vue.component('TableFilters',TableFilters)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
