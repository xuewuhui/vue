<template>
  <div id="app">
  	<h1>{{msg}}</h1>
    <h2>{{bar}}</h2>
  	<!-- <ul>
  		<li><router-link to="/list">list</router-link></li>
  		<li><router-link to="/welcome">welcome</router-link></li>
  	</ul> -->
    <!-- 导航 -->
    <Navigator :active="1"></Navigator>

    <!-- 计数器 - data必须是函数 -->
    <div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
    
    <!-- 按钮 - 显示隐藏子模板 -->
    <button class="btn-show-welcome" :disabled="isDisabled" @click="onShowWecComClick">{{buttonText}}</button><br/>

    <!-- 按钮 - 改变candidateName值 -->
    <button @click="onChangeText">改变父组件值并传递到子模板中</button>

    <!-- 子模板 -->
    <Welcome v-if="showWelcome" message="这是一个欢迎组件" user-message="张含韵本周日来南京" :user-type="1" :user-name="candidateName" :foo.sync="bar" @update:foo="val => bar = val"></Welcome>

    <!-- 分页 -->
    <Page></Page>

    <router-view></router-view>
  </div>
</template>

<script>
import List from './list'
import Navigator from './nav'
import Welcome from './welcome'
import Counter from './counter'
import Page from './page1'
export default {
  components: {
    Welcome,
    Navigator,
    Counter,
    Page
  },
  data () {
    return {
      msg: 'This is a demo!',
      candidateName: 'xuewuhui',
      buttonText: 'show welcome component',
      bar: 'This is a parent component text!',
      isDisabled: false,
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
    onChangeText () {
      this.candidateName = 'Hello world!'
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
@import '../css/reset.css';
</style>
