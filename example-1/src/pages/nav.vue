<template>
	<div id="nav">
		<ul>
			<li><router-link :class="{active:this.active === 1}" :to="{name: 'listCom'}">list</router-link></li>
			<li><router-link :class="{active:this.active === 2}" to="/welcome">welcome</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	props: ['active']
}
</script>

<style lang="stylus" scoped>
#nav{
	margin: 20px;
	li{
		font-size: 20px;
		.active{
			color: red;
		}
	}
}
</style>