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
      path:'/dandelion/config/list',
      name:'configlist',
      component:configList
    },
    {
      path:'/home/regular',
      name:'regular',
      component:regular
    },
    {
      path:'/dandelion/predicate/list',
      name:'list',
      component:List
    },
    {
      path:'/home/filter',
      name:'filter',
      component:Filter
    },
    {
      path:'/dandelion/config/details',
      name:'details',
      component:Details
    },
    {
      path:'/dandelion/predicate/update',
      name:'update',
      component:update
    },
    {
      path:'/dandelion/config/create',
      name:'create',
      component:create
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
