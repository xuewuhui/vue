<template>
	<div class="directive">
		<el-button v-authrization-admin="{role1: 'course-create', role2: 'course-edit'}">课程创建</el-button>
		<!-- <el-button v-authrization-admin="'course-edit'">课程编辑</el-button>
		<el-button v-authrization-admin="'course-delete'">课程删除</el-button>

		<el-button v-authrization-admin="'exam-create'">考试创建</el-button>
		<el-button v-authrization-admin="'exam-edit'">考试创建</el-button>
		<el-button v-authrization-admin="'exam-delete'">考试创建</el-button> -->
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Directive',
	data() {
		return {
			message: 'hello bike!'
		}
	}
}
</script>