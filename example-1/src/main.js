import Vue from 'vue'
import Router from 'vue-router'
import App from './pages/index'
import Welcome from './pages/welcome'
import List from './pages/list'
import View from './pages/view'

// 开启debug模式
Vue.config.debug = true

Vue.use(Router)

// 创建一个路由器实例
// 并且配置路由规则
const routes = [
  { // 重定向
    path: '/detail',
    redirect: to => {
      // const {hash, parames, query} = to
      return '/list'
    }
  },
  {
    path: '/list', name: 'listCom', component: List
  },
  {
    path: '/view', name: 'viewCom', component: View
  },
  {
    path: '/welcome', name: 'welCom', component: Welcome
  }
]

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})