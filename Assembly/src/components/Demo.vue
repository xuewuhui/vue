<template>
	<div class="">
		
		test
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Demo',
	data() {
		return {
			title: '',
			sender: '',
		}
	},
	mounted(){

		this.check(...[0, 1, 2])
		//this.check.apply(null, [0, 1, 2])
		
	},
	methods: {

		check(x, y, z) {
			console.log(x, y, z)
			console.log(Math.max(x, y, z))
		}

		
	}
}	
</script>
