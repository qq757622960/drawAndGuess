import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Login from './components/Login.vue'
import './css/style.css'

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueRouter)


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
