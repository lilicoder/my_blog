import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Article from '@/components/Article'
import Read from '@/components/Read'

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
    }
  ]
})
