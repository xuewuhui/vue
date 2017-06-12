<template>
	<div id="obtain" class="wrap">
		<HeaderComp title="合同获取"></HeaderComp>
		<div class="main">
			<MenuComp :active="3"></MenuComp>
			<div class="content">
				<div class="pages">
					合同获取合同获取合同获取合同获取
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

</style>
