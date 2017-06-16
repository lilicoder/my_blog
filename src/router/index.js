import Vue from 'vue'
import Router from 'vue-router'
const Index= resolove=> {
   require.ensure(['@/components/Index'], ()=>{
      resolove(require('@/components/Index'))
    })
};
const Article= resolove=> {
    require.ensure(['@/components/Article'], ()=>{
      resolove(require('@/components/Article'))
    })
};
const Read= resolove=> {
    require.ensure(['@/components/Read'], ()=>{
      resolove(require('@/components/Read'))
    })
};
const Case= resolove=> {
    require.ensure(['@/components/Case'], ()=>{
      resolove(require('@/components/Case'))
    })
};
const Tool= resolove=> {
    require.ensure(['@/components/Tool'], ()=>{
      resolove(require('@/components/Tool'))
    })
};

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
