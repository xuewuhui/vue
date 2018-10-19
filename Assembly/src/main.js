// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Validator from 'vue-validator'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 vue-kikindeditor 需要的文件
import VueKindEditor from 'vue-kindeditor'
import '../static/kindeditor/kindeditor-all.js'
import '../static/kindeditor/themes/default/default.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/public.css'


Vue.use(VueAwesomeSwiper)
Vue.use(Validator)
Vue.prototype.$echarts = echarts

let options = {
    title: '',  // 默认无标题
    btn: {
        text: '',
        style: {
            'backgroun-color': 'red',
            'font-size': '20px',
            'color': 'blue'
        }
    }
}

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, options)

// 注册 vue-kikindeditor plugin
Vue.use(VueKindEditor)

Vue.directive('authrization-admin', {
  bind: function(el, arg){
     console.log(arg)
     console.log(arg.value)
     console.log(typeof arg.value)
    // console.log(binding)
    // console.log(vnode)
    let permissions = ['course-create', 'course-edit', 'course-delete', 'exam-create', 'exam-edit', 'exam-delete']
    let permitRoles
    if(typeof arg.value === "string"){
      permitRoles = [arg.value]
    }else{
      permitRoles = arg.value
    }

    console.log(permitRoles)
    console.log(permissions)
    return

    if(permissions.some((role) => permitRoles.indexOf(role) > -1)){
      el.style.display = 'inline-block'
         
    }else{
      el.style.display = 'none'
    }
  }
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = window.localStorage.getItem('token') || '07512b87dca0b5cd5f187466aa4ea7b34cb7d4da';
  if(token && token !== 'undefined')
    config.headers.Authorization = "Token " + token
  //config.withCredentials = true
  return config;
}, function (error) {
  // 对响应错误做点什么
  /*if(error.response){
    if(error.response.status === 401){ // 接口返回401，token失效
      window.localStorage.clear()
      router.replace && router.replace({name: 'Login'})
    }
  }*/
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if(error.response){
    if(error.response.status === 401){ // 接口返回401，token失效
      
      return Promise.reject({code: 1, detail: "登录已过期，请重新登录！"});
    }
  }
  return Promise.reject(error.response && error.response.data);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
