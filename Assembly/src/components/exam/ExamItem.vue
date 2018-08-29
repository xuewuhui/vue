<template>
	<div class="item">
		
		<el-form :model="form">

		  <el-form-item label="问题题目：">
		    <div class="flex-middle">
		    	1、<el-input v-model="form.title"></el-input>
		    </div>
		  </el-form-item>

		  <el-form-item label="问题选项：">
		    <div class="flex-middle flex-wrap b20">
					<div class="flex-middle">
						A. <el-input v-model="form.options.option_1"></el-input>
					</div>

					<div class="flex-middle">
						B. <el-input v-model="form.options.option_2"></el-input>
					</div>

					<div class="flex-middle">
						C. <el-input v-model="form.options.option_3"></el-input>
					</div>

					<div class="flex-middle">
						D. <el-input v-model="form.options.option_4"></el-input>
					</div>
				</div>
		  </el-form-item>

		  <el-form-item label="正确答案：">
		    <el-radio-group v-model="form.answer">
			    <el-radio :label="1">A</el-radio>
			    <el-radio :label="2">B</el-radio>
			    <el-radio :label="3">C</el-radio>
			  </el-radio-group>
		  </el-form-item>

		</el-form>

		<!-- <el-button @click="handleGetQs">获取问题</el-button> -->



	</div>
</template>

<script type="text/javascript">
export default {
	name: 'ExamItem',
	props: ['data'],
	data() {
		return {
			form: {
				title: this.data && this.data.title,
				options: {
					option_1: this.data && this.data.options && this.data.options.option_1,
					option_2: this.data && this.data.options && this.data.options.option_2,
					option_3: this.data && this.data.options && this.data.options.option_3,
					option_4: this.data && this.data.options && this.data.options.option_4,
				},
				answer: this.data && this.data.answer,
			},

		}
	},
	mounted() {
		console.log(this.data)
	},
	methods: {

		


	}
}	
</script>
