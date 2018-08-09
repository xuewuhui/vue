<!--
* 地图组件（用于展示定位）
* position：根据地址定位 
-->
<template>
  <div id="container" class="map" style="height:400px"></div>
</template>

<script>
let geocoder, marker, map = null

export default {
  name: 'Map',
  props: ['position'],
  mounted() {
    this.initMap()
  },
  watch: {
    'position': function(a, b){
      // 根据地址定位
      geocoder.getLocation(a)
    }
  },
  methods: {

    // 初始化地图
    initMap() {
      let myLatlng = new qq.maps.LatLng(39.916527, 116.397128),
        myOptions = {
          zoom: 13,
          center: myLatlng,
          mapTypeId: qq.maps.MapTypeId.ROADMAP
        }

      map = new qq.maps.Map(document.getElementById("container"), myOptions);
      
      //创建marker
      var marker = new qq.maps.Marker({
          position: myLatlng,
          map: map
      });

      //调用地址解析类
      geocoder = new qq.maps.Geocoder({
        complete : function(result){
          map.setCenter(result.detail.location);
          var marker = new qq.maps.Marker({
            map:map,
            position: result.detail.location
          });

          //自定义图标
          const anchor = new qq.maps.Point(16, 20),
            size = new qq.maps.Size(32, 32),
            origin = new qq.maps.Point(0, 0),
            markerIcon = new qq.maps.MarkerImage(
              "static/images/address.png",
              size, 
              origin,
              anchor
            );
          marker.setIcon(markerIcon);
        }
      })
    },

  }
}
</script>
<style lang="stylus" scoped>
  .map{
    width: 600px
    height:400px
  }
</style>

