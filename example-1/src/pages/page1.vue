<template>
	<div id="pages">
		<h4>{{title}}</h4>
		<h3>{{reverseMsg}}</h3>
		<div v-if="loading" class="loading"><div>loading...</div></div>
		
		<!-- 纯HTML模板语言 -->
		<div v-html="rawHTML" style="margin:20px"></div>

		<!-- 数据列表 -->
		<ul>
			<li v-for="item in items" @click="onOpenViewClick(item.id)">
					{{item.real_name}}
					<!-- {{item.end_time | formateDate}} -->
					{{item.end_time | formateDate('arg1','arg2')}}
			</li>
		</ul>

		<!-- 分页 -->
		<Pagination :pagination="pagination" :callback="fetchListData" :options="paginationOptions"></Pagination>
	</div>
</template>

<script type="text/javascript">
import $ from '../js/jquery'
import Fetch from '../js/fetch'
import Constants from '../common/Constants'
import Pagination from '../common/Pagination'
import Utils from '../common/Utils'

export default {
	name: 'pagination',
	data () {
		return {
			title: 'This is a Pagination compontent',
			loading: true,
			rawHTML: '<h3>纯HTML模板语言</h3>',
			items: [],
			pagination: {
				total: 0,
				per_page: 10,
				current_page: 1,
				last_page: 0,
				form: 0,
				to: 4
			},
			paginationOptions: {
				//offset: 4,
				previousText: '上一页',
				nextText: '下一页',
				searchText: '搜索',
				alwaysShowPrevNext: true
			}
		}
	},
	created () {
		this.fetchListData()
	},
	mounted () {
		//组件已挂载

	},
	computed: {
		//计算属性
		reverseMsg () {
			return this.title.split('').reverse().join('')
		}
	},
	filters: {
		// 过滤器，用于常见的文本格式化，可用于mustache插值和v-bind表达式
		// {{date | formateDate}}
		// <div v-bind:date="new Date() | formateDate"></div>
		// 过滤器函数总接受表达式的值作为第一个参数
		formateDate () {
			return Utils.formatDateToDays(arguments[0])
		}
	},
	methods: {
		//跳转到view组件
		onOpenViewClick (id) {
  		this.$router && this.$router.push && this.$router.push({name: 'viewCom', params: {id: id, orginal: 0}})
  	},
		// 请求数据
		fetchListData () {
			this.loading = true
			let url = Constants.URLS.CANDIDATES_URL + '?page='+this.pagination.current_page+'&count='+this.pagination.per_page		
      Fetch.get(
      	url,
      	(data)=>{
      		//console.log(data)
      		this.loading = false
      		this.items = data.results
      		this.pagination.total = data.count
      		this.pagination.last_page = Math.floor(data.count / this.pagination.per_page)
      	},(error)=>{
      		this.loading = false
      		$.alert(error.statusText)
      	}
      )
    }
	},
	components: {
		Pagination
	}
}
</script>
