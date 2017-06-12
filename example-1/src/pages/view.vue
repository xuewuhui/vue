<template>
	<div id="view" class="view">
		<h2>{{title}}</h2>
		<div v-if="loading" class="loading"><div>loading...</div></div>
		<router-link :to="{name: 'listCom'}">go back</router-link>
		<div v-if="viewData" class="detail">
			{{orginalFrom ? viewData.name : viewData.real_name}}
			{{(orginalFrom ? viewData.end_time : viewData.create_time) | formateDate}}
		</div>
	</div>
</template>

<script type="text/javascript">
import $ from '../js/jquery'
import Fetch from '../js/fetch'
import Constants from '../common/Constants'
import Utils from '../common/Utils'

export default {
	data () {
		return {
			title: 'Details',
			loading: true,
			viewData: null
		}
	},
	created () {
		this.orginalFrom ? this.fetchViewData() : this.fetchCandidateData()
	},
	mounted () {
		//console.log('组件已挂载')
	},
	filters: {
		// 过滤器，用于常见的文本格式化，可用于mustache插值和v-bind表达式
		// {{date | formateDate}}
		// <div v-bind:date="new Date() | formateDate"></div>
		// 过滤器函数总接受表达式的值作为第一个参数
		formateDate (date) {
			return Utils.formatDateToDays(date)
		}
	},
	computed: {
		orginalFrom () {
			return this.$route.params.orginal
		}
	},
	methods: {

		//获取合同列表
		fetchViewData () {
			let id = this.$route.params.id
			// 如果id不存在，将返回到列表
			if(!id) return this.$router.push({name:'listCom'})
			Fetch.get(
				Constants.URLS.CONTRACTS_DETAIL_URL + id +'/',
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
		},

		//获取candidate详情
		fetchCandidateData () {
			let id = this.$route.params.id
			// 如果id不存在，将返回到列表
			if(!id) return this.$router.push({name:'listCom'})
			Fetch.get(
				Constants.URLS.CANDIDATE_DETAIL_URL + id +'/',
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