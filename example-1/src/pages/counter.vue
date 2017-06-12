<template>
	<button @click="onCounterClick">{{counter}}</button>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			counter: 0
		}
	},
	methods: {
		onCounterClick () {
			return this.counter += 1
		}
	}
}
</script>