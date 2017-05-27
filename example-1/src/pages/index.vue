<template>
  <div id="app">
  	<h1>{{msg}}</h1>
    <h2>{{bar}}</h2>
  	<ul>
  		<li><router-link to="/list">list</router-link></li>
  		<li><router-link to="/welcome">welcome</router-link></li>
  	</ul>
    <List v-if="showList"></List>
    <button class="btn-show-welcome" :disabled="isDisabled" @click="onShowWecComClick">{{buttonText}}</button>
    <Welcome v-if="showWelcome" :user-name="userName" :foo.sync="bar" @update:foo="val => bar = val"></Welcome>
    <router-view></router-view>
  </div>
</template>

<script>
import List from './list'
import Welcome from './welcome'
export default {
  components: {
    List,
    Welcome
  },
  data () {
    return {
      msg: 'This is a demo!',
      userName: 'xuewuhui',
      buttonText: 'show welcome component',
      bar: 'This is a welcome page!',
      isDisabled: false,
      showList: false,
      showWelcome: false
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法，不能使用箭头函数来定义watch函数
    '$route': 'resetForm',
    onShowTips: function(){
      console.log('不能使用箭头函数来定义watch函数')
    }
  },
  methods: {
    onShowWecComClick (event) {
      // 获取当前元素
      let el = event.target;
      if(this.showWelcome){
        this.showWelcome = false
        this.buttonText = 'show welcome component'
        el.setAttribute('class','btn-show-welcome')
      }else{
        this.showWelcome = true
        this.buttonText = 'hide welcome component'
        el.setAttribute('class','btn-hide-welcome')
      }
    },
    resetForm () {
      console.log('resetForm')
    }
  }
}
</script>

<style>
.btn-show-welcome,.btn-hide-welcome{
  height:26px;
  line-height:26px;
  color: #fff;
  background-color: blue;
  border:0;
  border-radius: 4px;
}
.btn-hide-welcome{
  background-color: #666;
}
</style>
