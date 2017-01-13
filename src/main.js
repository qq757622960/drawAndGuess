import Vue from 'vue'
import App from './components/App'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import './css/style.css'

var VueResource = require('vue-resource')
Vue.use(VueResource)

Vue.use(Router)
var router = new Router({
  history: false
})

Vue.use(VueTouch)

routerConfig(router)
router.start(App, '#start')
window.router = router

function routerConfig(router){
  router.map({
    '/hello': {
      name: 'hello',
      component:function(resolve){
        require(['./components/Hello.vue'], resolve)
      }
    }
  })

  router.redirect({
    '*': '/hello'
  })
}
