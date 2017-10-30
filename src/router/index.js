import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Finder from '@/pages/Finder/Finder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/finder',
      name: 'finder',
      component: Finder
    }
  ]
})
