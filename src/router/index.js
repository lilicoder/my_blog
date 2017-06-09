import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Article from '@/components/Article'
import Read from '@/components/Read'
import Case from '@/components/Case'
import Tool from '@/components/Tool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/article',
      name:'article',
      component:Article
    },
    {
      path:'/read',
      name:'read',
      component:Read
    },
    {
      path:'/case',
      name:'case',
      component:Case
    },
    {
      path:'/tool',
      name:'tool',
      component:Tool
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to);
    return { x: 0, y: 0 }
  }
})
