<template>
  <div id="app">
    <ul>
      <li><router-link :to="{name:'Map'}">地图</router-link></li>
      <li><router-link :to="{name:'Tree'}">组织结构</router-link></li>
      <li><router-link :to="{name:'HtmlEditor'}">编辑器</router-link></li>
      <li><router-link :to="{name:'Crpopper'}">裁剪</router-link></li>
      <li><router-link :to="{name:'Swiper'}">Swiper</router-link></li>
      <li><router-link :to="{name:'Validator'}">数据检查</router-link></li>
    </ul>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
}
ul{
  margin-right: 20px;
}
</style>
