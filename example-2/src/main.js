// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './pages/App'
import Login from './pages/Login'
import ContractObtain from './pages/ContractObtain'
import Recommender from './pages/Recommender'

Vue.config.productionTip = false

Vue.use(Router)

const routes = [
	{
		path: '/', compontent: App
	},
	{
		path: '/login', name: 'Login', component: Login
	},
	{
		path: '/contractObtain', name: 'ContractObtain', component: ContractObtain
	},
	{
		path: '/recommender', name: 'Recommender', component: Recommender
	}
]

const router = new Router({
	mode: 'history',
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
