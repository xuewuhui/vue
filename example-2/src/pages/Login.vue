<template>
	<div id="login" class="tm">
		<form @submit.prevent="submit">
			<ul>
				<li class="tm"><img class="logo" src="../images/login_logo.png" /></li>
				<li><input class="form-control" type="text" placeholder="用户名" v-model="user.name" /></li>
				<li><input class="form-control" type="password" placeholder="密码" v-model="user.password" /></li>
				<li><button type="submit">登录</button></li>
			</ul>
		</form>
		<!-- loading -->
		<Loading v-if="loading"></Loading>
	</div>
</template>

<script type="text/javascript">
import Blowfish from 'blowfish'
import $ from '../js/jquery'
import Fetch from '../js/fetch'
import Consts from '../common/Constants'
import Utils from '../common/Utils'
import Loading from './template/Loading'
const ENCRYPT_MAGIC_CODE = 'gikoo@2013';

export default {
	data () {
		return {
			loading: false,
			user: {
				name: '',
				password: ''
			}
		}
	},
	created () {
		//console.log()
	},
	methods:{

		//blowfish加密
		encryptPsd (key, text) {
			var bf = new Blowfish(key);
			return bf.encrypt(Utils.pkcs7_encode(text,8));
		},

		//登录
		submit () {
			let name = this.user.name,
					password = this.user.password;

			if(!name){
				$.alert("请填写用户名");
				return;
			}

			if(!password){
				$.alert("请填写密码");
				return;
			}

			let data = {
				email: name,
				password: this.encryptPsd(name+ENCRYPT_MAGIC_CODE, password),
				domain: 'consultant',
				platform:'mlp'
			}
			this.loading = true

			Fetch.post(
				Consts.URLS.LOGIN_URL,
				data,
				(res)=>{
					this.loading = false
					this.loginSuccess(res)
				},
				(error)=>{
					this.loading = false
					$.alert('用户名或密码错误！')
				}
			)
		},

		//登录成功返回
		loginSuccess (data) {
			Fetch.setItem('token',data.token);
			Fetch.setItem("GIKOOUN",data.account_name);
			Fetch.setItem("GIKOO-USR",JSON.stringify(data));
			this.goToUrl && this.goToUrl(data);
		},

		//根据用户角色跳转对应模块
		goToUrl (data) {
			let component = 'ContractObtain';
			if(data.role === 0) //顶级管理员
				component = 'ContractObtain';
			else if(data.user_type === 2) //招聘顾问
				component = 'ContractObtain';
			this.$router && this.$router.push && this.$router.push({name: component})
		}

	},
	components : {
		Loading
	}
}
</script>

<style lang="stylus" scoped>
#login{
	width:360px
	height:310px
	position:absolute
	left:50%
	top:50%
	margin-left: -(@width / 2)
	margin-top: -(@height / 2 + 20)
	li{
		margin-top:25px
		&:first-child{
			margin:0
		}
	}
	.logo{
		width:270px
	}
	input{
		width:100%
		height:50px
		line-height:50px
		font-size:20px
	}
	button{
		width:100%
		height:50px
		font-size:20px
		color:#fff
		border:0
		background-color:#ca2d2d
	}
}
</style>
