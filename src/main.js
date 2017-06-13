// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import VueLazyload from 'vue-lazyload/vue-lazyload'

Vue.use(VueLazyload, {
  error: 'assets/images/404.jpg',
  loading: 'assets/images/loading.gif',
  try: 3 // default 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
