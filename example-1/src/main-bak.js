// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
// import firstComponent from './components/firstComponent'

// 开启debug模式
Vue.config.debug = true

Vue.use(VueRouter)

const First = { template: '<div><h2>我是第1个子页面</h2></div>' }
import secondComponent from './components/secondComponent'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondComponent
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
