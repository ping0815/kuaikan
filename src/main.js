// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入mint-ui
import { Swipe, SwipeItem, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Lazyload)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios

//监听全局路由变化
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/finder' || to.path === '/community' || to.path === '/mine') {
    store.state.tabBarShow = true
  } else {
    store.state.tabBarShow = false
  }
  next()
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
