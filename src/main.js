import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Login from './components/Login.vue'
import Hall from './components/Hall.vue'
import './css/style.css'

// 调用模块
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)

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
    {path : '/hall',component: Hall},
    {path: '/', redirect: '/login'}
  ]
})
window.router = router

// 创建和挂载根实例。
new Vue({
  el : '#app',
  router
})
