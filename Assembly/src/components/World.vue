<template>
	<div ref="myChart" style="width:1000px;height:560px;"></div>
</template>

<script type="text/javascript">
 import world from 'echarts/map/js/world.js'
let myChart = null

export default {
	name: 'World',
	data() {
		return {
			data: []
		}
	},
	mounted(){

		// 渲染地图
    myChart = this.$echarts.init(this.$refs.myChart);
    myChart.showLoading();

    this.renderChartView()
	},
	methods: {

		// 渲染地图
    renderChartView() {
			let option = {
        backgroundColor: '#fff',
        /*title: {
          text: '光大培训点',
          subtext: 'data from PM25.in',
          sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },*/
        tooltip : {
          trigger: 'item',
          formatter: function (params) {
            return '<div>'+params.value[2]+'</div>';
          },
          // position: 'bottom',
          // offset: [0, 10],
        },
        /*legend: {
          orient: 'vertical',
          y: 'bottom',
          x:'right',
          data:['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },*/
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#8baccb',
              borderColor: '#fff'
            },
            emphasis: {
              areaColor: '#799fc4'
            }
          },
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        //symbol: 'circle', //可以通过 'image://url' 设置为图片，其中 URL 为图片的链接，或者 dataURI 'image://http://xxx.xxx.xxx/a/b.png'
        symbol: 'image://static/img/map.png',
        series : [
          {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            //data: convertData(data),
            symbolSize: function (val) {
              return 50;
            },
            showEffectOn: 'render',
            /*rippleEffect: {
              brushType: 'fill'
            },*/
            hoverAnimation: true,
            /*label: {
              normal: {
                formatter: function(params){
                  return params.name+': '+params.value[2];
                },
                position: 'bottom',
                color: '#fff',
                show: true,
                offset: [0, 4],
                backgroundColor: 'rgba(0, 0, 0, .8)',
                padding: [4, 10],
                borderRadius: 2
              }
            },*/
            /*itemStyle: {
              normal: {
                color: function (params) {
                  var value = params.value[2];
                  if (value === 0) {
                    return '#5E6472';
                  } else if (value < 20) {
                    return '#E84441';
                  } else if (value >= 20) {
                    return '#F0C94D';
                  }
                  return '#78E85C';
                },
                shadowBlur: 8,
                shadowColor: '#333'
              }
            },*/
            zlevel: 1
          }
        ]
      };

			myChart.hideLoading()
	 		myChart.setOption(option);

    },

	}
}	
</script>
