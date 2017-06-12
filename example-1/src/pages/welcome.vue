<template>
  <!-- 写在html中的 是非字符串模板
  写在js中的 template:"",是字符串模板 -->
	<div id="welcome" class="welcome">
		<h3>父组件的动态数据: {{userName}}</h3>
    <h4>父组件的非字符串模板静态数据: {{message}}</h4>
    <h4>父组件的非字符串模板驼峰式命名: {{userMessage}}</h4>
    <h4>字面量语法 vs 动态语法string/number: {{typeof userType}}</h4>
    <button @click="onChangeParentPar">改变父组件参数值</button>
	</div>
</template>

<script>
export default {
  name: 'hello',
  props: ['userName', 'message', 'userMessage', 'userType'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!!',
      isChange: false
    }
  },
  created () {  	
  	
  },
  mounted () {    
  	//console.log('mounted'+this.userName)
  },
  methods: {
    onChangeParentPar () {
      let text
      if(this.isChange){
        this.isChange = false
        text = 'This is a parent component text!'
      }else{
        this.isChange = true
        text = '.sync已经改变父组件值'        
      }
      //会扩展成一个更新父组件绑定值的 v-on 侦听器
      this.$emit('update:foo', text)
    }
  }
}
</script>
