import Vue from 'vue'
import Router from 'vue-router'
const Index= resolve=> {
    require(['@/components/Index'], resolve)
}
const Article= resolve=> {
    require(['@/components/Article'], resolve)
}
const Read= resolve=> {
    require(['@/components/Read'], resolve)
}
const Case= resolve=> {
    require(['@/components/Case'], resolve)
}
const Tool= resolve=> {
    require(['@/components/Tool'], resolve)
}

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
  ]
})
