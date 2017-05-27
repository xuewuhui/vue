<template>
	<div id="welcome" class="welcome">
		<h2>Welcome {{userName}}</h2>
	</div>
</template>

<script>
export default {
  name: 'hello',
  props: ['userName','showWelcome'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!!'
    }
  },
  created () {
  	//会扩展成一个更新父组件绑定值的 v-on 侦听器
  	let text = '.sync已经改变父组件值';
  	this.$emit('update:foo', text)
  },
  mounted () {
  	//console.log('mounted'+this.userName)
  }
}
</script>
