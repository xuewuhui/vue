<template>
	<div id="list" class="list">
		<h2>{{msg}}</h2>
		<h3>{{reverMsg}}</h3>
		<div v-if="loading" class="loading"><div>loading...</div></div>
		<div v-if="error">列表加载失败</div>
		<!-- params参数必跳转路由名称才能传递 -->
		<!-- <router-link :to="{name: 'viewCom', params: {id: 12212}}">welcome</router-link> -->
		<ul v-if="listData">
			<li v-for="item in listData" @click="onOpenViewClick(item.id)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import $ from '../js/jquery'
import utils from '../js/utils'
export default {
  data () {
    return {
      msg: 'List View!',
      loading: true,
      error: false,
      listData: null
    }
  },
  created () {
  	utils.setItem('token','d4ac3e2c55c68db6be6f589e5448d2b9c1804bac')
    // 组件创建完成后获取数据
    this.fetchListData()
  },
  computed: {
  	// 计算缓存属性，当依赖元素未发生改变，多次访问该计算属性会立即返回之前计算的结果，而不必再次执行函数
  	reverMsg: function () {
  		return this.msg.split('').reverse().join('')
  	}
  },
  methods: {
  	onOpenViewClick (id) {
  		this.$router && this.$router.push && this.$router.push({name: 'viewCom', params: {id: id}})
  	},
    fetchListData () {
      utils.get(
      	'http://consultant.mps5dev.gikoo.cn/api/v1/consultant_task/position/my/?page=1&count=20',
      	(data)=>{
      		console.log(data)
      		this.loading = false
      		this.listData = data.results
      	},(error)=>{
      		this.error = true
      		this.loading = false
      		$.alert(error.statusText)
      	}
      )
    }
  }

}
</script>

<style lang="stylus">
.loading {
	width:100%
	position:fixed;
	left:0;
	right:0;
	top:0;
	bottom:0;
	z-index:10;
	background-color:rgba(0,0,0,.3);
	div{
		width:100px;
		height:100px;
		line-height:100px;
		text-align:center;
		background-color:rgba(0,0,0,.4);
		border-radius:4px;
		position:absolute;
		left:50%;
		top:50%;
		margin:-50px 0 0 -50px;
	}
}

</style>
