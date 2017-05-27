<template>
	<div id="view" class="view">
		<h2>{{title}}</h2>
		<div v-if="loading" class="loading"><div>loading...</div></div>
		<router-link :to="{name: 'listCom'}">go back</router-link>
		<div v-if="viewData" class="detail">{{viewData.name}}</div>
	</div>
</template>

<script type="text/javascript">
import $ from '../js/jquery'
import utils from '../js/utils'
export default {
	data () {
		return {
			title: 'Details',
			loading: true,
			viewData: null
		}
	},
	created () {
		this.fetchViewData()
	},
	mounted () {
		console.log('组件已挂载')
	},
	methods: {
		fetchViewData () {
			let id = this.$route.params.id
			// 如果id不存在，将返回到列表
			if(!id) return this.$router.push({name:'listCom'})
			utils.get(
				'http://consultant.mps5dev.gikoo.cn/api/v1/consultant_task/position/'+id+'/',
				(data) => {
					console.log(data)
					this.loading = false
					this.viewData = data
				},
				(error) => {
					this.loading = false
      		$.alert(error.statusText)
				}
			)
		}
	}
}
</script>

<style lang="stylus">
#view{
	h2{font-size:20px;color:red;}
	.detail{
		margin: 20px;
		color: blue
	}
}
</style>