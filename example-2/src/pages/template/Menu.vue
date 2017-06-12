<template>
	<div id="silder">
		<ul>
			<li class="icon icon-obtain" :class="{active: active === 3}"><router-link :to="{name: 'ContractObtain'}" title="合同获取">合同获取</router-link></li>
			<li class="icon icon-relation" :class="{active: active === 4}"><router-link :to="{name: 'Recommender'}" title="推荐人员">推荐人员</router-link></li>
			<!-- <li class="icon icon-person" :class="{active: active === 5}"><router-link :to="{name: 'MyResources'}" title="我的资源">我的资源</router-link></li>
			<li class="icon icon-record" :class="{active: active === 6}"><router-link :to="{name: 'RecordInfo'}" title="申请记录">申请记录</router-link></li>
			<li class="icon icon-auto" :class="{active: active === 7}"><router-link :to="{name: 'AutoApplication'}" title="自动申请">自动申请</router-link></li> -->
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
	props : ['active']
}
</script>

<style lang="stylus" scoped>
#silder{
	width:240px
	background-color:#ca2d2d
	li{
		height:70px
		line-height:70px
		padding-left:65px
		font-size:20px		
		a{
			color:#fff
			text-decoration:none
		}
		a:hover{
			color:#e06663
		}
	}
	.icon{
		background-position:25px center
		background-repeat:no-repeat
		background-size:34px auto
	}
	.icon-obtain{
		background-image:url('../../images/icon-obtain.png')
	}
	.icon-relation{
		background-image:url('../../images/icon-relation.png')
	}
	.icon-person{
		background-image:url('../../images/icon-person.png')
	}
	.icon-record{
		background-image:url('../../images/icon-record.png')
	}
	.icon-auto{
		background-image:url('../../images/icon-auto.png')
	}
	.active{
		padding-left:65px
		border-left:5px solid #fff
		background-color:#9b2021
	}
	
}
</style>
