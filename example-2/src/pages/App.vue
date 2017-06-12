<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import $ from '../js/jquery'
import Fetch from '../js/fetch'

export default {
	created () {
		let token = Fetch.getItem('token')
		if(token)
			this.$router && this.$router.replace && this.$router.replace({name: 'ContractObtain'})
		else
			this.$router && this.$router.replace && this.$router.replace({name: 'Login'})
	}
}
</script>

<style type="text/css">
body{
	background-color:#f5f5f5;
}
@import '../css/reset.css'
</style>
