<template>
	<div id="pages">
		<h4>{{title}}</h4>
		<ol>
			<li v-for="item in items">{{item}}</li>
		</ol>
		<pagination :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination>
	</div>
</template>

<script type="text/javascript">
import pagination from 'vue-bootstrap-pagination'

export default {
	name: 'pagination',
	data () {
		return {
			title: 'This is a Pagination compontent',
			items: [1,2,3],
			pagination: {
				total: 20,
				per_page: 2,
				current_page: 1,
				last_page: 0,
				from: 1,
				to: 12
			},
			paginationOptions: {
				offset: 4,
				previousText: 'Prev',
				nextText: 'Next',
				alwaysShowPrevNext: true
			}
		}
	},
	created () {
		
		//console.log(Pagination)
	},
	mounted () {
		//this.page.init()
		//console.log(this)
	},
	methods: {
		loadData () {
			console.log('load data')
		}
	},
	components: {
		pagination
	}
}
</script>