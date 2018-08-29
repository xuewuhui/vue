<template>
	<div class="exam">
		<ExamItem ref="ExamItem" v-for="item in 3" :key="item.title" :order="item" :data="list[item-1]"></ExamItem>
		<el-button @click="handleGetQs">获取问题</el-button>
	</div>
</template>

<script type="text/javascript">
import ExamItem from './ExamItem'

export default {
	name: 'Exam',
	components: {
		ExamItem,
	},
	data() {
		return {
			list: [
				{
					title: '111',
					options: {
						option_1: '11',
						option_2: '12',
						option_3: '13',
						option_4: '14',
					},
					answer: 2,
				},
				{
					title: '222',
					options: {
						option_1: '21',
						option_2: '22',
						option_3: '23',
						option_4: '24',
					},
					answer: 3,
				},
			],
		}
	},
	mounted() {

	},
	methods: {

		//
		handleGetQs() {
			let examItems = this.$refs.ExamItem
			if(examItems && examItems.length){
				this.list = examItems.map((e) => {
					return e.form
				})
				console.log(this.list)
			}

		}

	}
}	
</script>
