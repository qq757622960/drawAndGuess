import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import WildDog from 'wilddog'

import Login from './components/Login.vue'
import './css/style.css'

// 调用模块
Vue.use(VueResource)
Vue.use(VueRouter)

require('wilddog')

// 定义路由
const routes = [
  {path : '/login',component: Login},
  {path: '/', redirect: '/login'}
]

// 创建 router 实例
const router = new VueRouter({
  routes: [
    {path : '/login',component: Login},
    {path: '/', redirect: '/login'}
  ]
})

// 创建和挂载根实例。
new Vue({
  el : '#app',
  router
})

router.push('/login');
