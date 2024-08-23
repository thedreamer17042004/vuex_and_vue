import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex)
import configStore from './store'
const store = new Vuex.Store({
  configStore

})
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
