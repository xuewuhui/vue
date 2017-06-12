<template>
	<div class="loading">
		<div><img src="../../images/ajax-loader.gif" /></div>
	</div>
</template>

<style lang="stylus" scoped>
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
