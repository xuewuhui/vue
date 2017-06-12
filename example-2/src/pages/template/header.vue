<template>
	<div id="header">
		<div class="leftBar">
			<div class="logo"><img src="../../images/logo.png" /></div>
			<div class="title">{{title}}</div>
		</div>	
		<div class="person">
			<img :src="icon" />
			<span>{{name}}</span>
			<img @click="onLoginOutClick" src="../../images/login-out.png" />
		</div>
		<!-- loading -->
		<Loading v-if="loading"></Loading>
	</div>
</template>

<script type="text/javascript">
import $ from '../../js/jquery'
import Fetch from '../../js/fetch'
import Consts from '../../common/Constants'
import Loading from './Loading'

export default {
	data () {
		return {
			loading: false,
			name: '匿名',
			icon: require('../../images/default.png')
		}
	},
	props: {
		title : {
			type: String,
			default: '招聘工具'
		}
	},
	created () {
		const user_info = Fetch.getItem('GIKOO-USR') && JSON.parse(Fetch.getItem('GIKOO-USR'))
		
		this.name = user_info.account_name ? user_info.account_name : user_info.real_name
		user_info.icon && (this.icon = user_info.icon)
		
		document.title = this.title || '招聘顾问';
	},
	methods: {
		//登出
		onLoginOutClick () {
			Fetch.post(
				Consts.URLS.LOGOUT_URL,
				null,
				(res)=>{
					this.loading = false
					this.clearCookie()
				},
				(error)=>{
					this.loading = false
					this.clearCookie()
				}
			)
		},

		//清除cookie
		clearCookie () {		
			Fetch.removeItem('GIKOOUN')
			Fetch.removeItem('GIKOO-USR')
			Fetch.removeItem('token')
			this.$router && this.$router.push && this.$router.push({name: "Login"})
		}
	},
	components: {
		Loading
	}
}
</script>

<style lang="stylus" scoped>
height = 96px
color = #ca2d2d
align-center(){
	align-items:center
}
#header{
	display:flex
	justify-content:space-between
	align-center()
	clear:both
	.leftBar{
		display:flex
		flex-direction:row
		align-center()
	}
	.logo{
		width:240px
		height:height
		display:flex
		justify-content:center
		align-center()
		background-color:color
		img{
			width:155px
		}
	}
	.title{
		margin-left:30px
		font-size:26px
		color:color
	}
	.person{
		display:flex
		align-center()
		margin-right:20px
		font-size:20px
		color:#646464
		img:first-child{
			width:26px
			height:26px
			margin-right:10px
		}
		img:last-child{
			width:30px
			height:30px
			margin-left:30px
		}
	}
}
</style>
