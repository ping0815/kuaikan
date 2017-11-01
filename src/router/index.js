import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Finder from '@/pages/Finder/Finder'
import Community from '@/pages/Community/Community'
import Mine from '@/pages/Mine/Mine'
import DetailPage from '@/pages/Detail-page/Detail-page'

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
    }
  ]
})
