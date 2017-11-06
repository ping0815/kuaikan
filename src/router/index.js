import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Finder from '@/pages/Finder/Finder'
import Community from '@/pages/Community/Community'
import Mine from '@/pages/Mine/Mine'
import DetailPage from '@/pages/Detail-page/Detail-page'
import More from '@/pages/More/More'
import Login from '@/pages/Login/Login'

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
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/detail-page',
      name: 'detail-page',
      component: DetailPage
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
