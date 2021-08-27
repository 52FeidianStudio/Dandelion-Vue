import Vue from 'vue'
import VueRouter from 'vue-router'
import configList from '@/components/configList'
import regular from '@/components/regular'
import login from '@/components/login'
import home from '@/components/home/home'
import List from '@/components/List'
import Filter from '@/components/filter'
import Details from '@/components/details'
import update from '@/components/update'
import create from '@/components/create'
import create_path from '@/components/create_path'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/dandelion',
    name:'home',
    component:home,
    children:[{
      path:'/config/list',
      name:'configlist',
      component:configList
    },
    {
      path:'/home/regular',
      name:'regular',
      component:regular
    },
    {
      path:'/predicate/list',
      name:'list',
      component:List
    },
    {
      path:'/home/filter',
      name:'filter',
      component:Filter
    },
    {
      path:'/config/details',
      name:'details',
      component:Details
    },
    {
      path:'/predicate/update',
      name:'update',
      component:update
    },
    {
      path:'/config/create',
      name:'create',
      component:create
    },
    {
      path:'/predicate/create',
      name:'create_path',
      component:create_path
    }
  ]
  }
]

const router = new VueRouter({
  mode:'hash',
  routes:routes
})

export default router
