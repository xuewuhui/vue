<template>
	<div class="info">
		<swiper :options="swiperOption" ref="mySwiper" >  
      <!-- 这部分放你要渲染的那些内容 -->  
      <swiper-slide v-for="item in data" :key="item"> 
      	<img :src="item" />
      </swiper-slide>  
      <!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>  
  </swiper>
</div>
</template>

<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
let oringalPdf = []

export default {
	name: 'Swiper',
	components: {  
      swiper,  
      swiperSlide  
  }, 
	data() {
		return {
			data: [],
			Height: 400,
			swiperOption: {  
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
          autoplay:false,
          notNextTick: true,
          slidesPerView: 'auto',  
          centeredSlides: true,  
          paginationClickable: true,  
          spaceBetween: 30,  
          pagination: {
	          el: '.swiper-pagination',
	          type: 'fraction',
	        },
          on: {
          	slideChangeTransitionEnd: function() {
          		let index = this.activeIndex
          		console.log(index)
          		console.log(oringalPdf[index])
          	},
				    // slideChange: function(){
				    //   console.log('改变了');
				    // }, 
				  }
      }  
		}
	},
	mounted() {
		//
		this.fetchPdfData()
	},
	methods: {

		//
		fetchPdfData() {
			let res = {
				data: [
					'http://iap-bucket.qiniudn.com/FtfeqUoCf-4s9DQCItcEkJ0Tv87m',
					'http://iap-bucket.qiniudn.com/FsdIyVlnZACwB9nvouD5VzvRXRCi',
					'http://iap-bucket.qiniudn.com/o_1c9qfjn47kje1labf44vkhbhi9.pdf.png'
				]
			}
			this.data = res.data
			oringalPdf = res.data
		},


	},
}
</script>

<style>

	.info{
		width: 600px;
		height: 400px;
		background-color: #000;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
	.swiper-slide{
		height: 100%;
		line-height: 400px;
		text-align: center;
		overflow: auto;
	}
	.swiper-slide img{
		max-width: 100%;
		height: auto;
		vertical-align: middle;
	}




</style>
