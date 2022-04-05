import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import excel from 'vue-excel-export'
// import VueApexCharts from 'vue-apexcharts'
Vue.config.productionTip = false
Vue.use(VueMaterial)
// Vue.use(excel)
// Vue.use(VueApexCharts)
// Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
