<template>
	<div id="obtain" class="wrap">
		<HeaderComp title="推荐人员"></HeaderComp>
		<div class="main">
			<MenuComp :active="4"></MenuComp>
			<div class="content">
				<div class="pages">
					推荐人员推荐人员推荐人员
				</div>
			</div>
		</div>		
	</div>
</template>

<script type="text/javascript">
import HeaderComp from './template/Header'
import MenuComp from './template/Menu'

export default {
	data () {
		return {
			title: 'this is Contract obtain page'
		}
	},
	components: {
		HeaderComp,
		MenuComp
	},
	created () {

	},
	methods: {

	},
}
</script>

<style lang="stylus">
.content{
	
}
</style>
