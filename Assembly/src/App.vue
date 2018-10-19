<template>
  <div id="app">
    <ul>
      <li><router-link :to="{name:'Demo'}">demo</router-link></li>
      <li><router-link :to="{name:'FilterHtml'}">ES6 标签模板(Html过滤)</router-link></li>
      <li><router-link :to="{name:'Map'}">地图</router-link></li>
      <li><router-link :to="{name:'China'}">中国地图</router-link></li>
      <li><router-link :to="{name:'World'}">世界地图</router-link></li>
      <li><router-link :to="{name:'Tree'}">组织结构</router-link></li>
      <li><router-link :to="{name:'HtmlEditor'}">编辑器</router-link></li>
      <li><router-link :to="{name:'Crpopper'}">裁剪</router-link></li>
      <li><router-link :to="{name:'Swiper'}">Swiper</router-link></li>
      <li><router-link :to="{name:'Exam'}">考试</router-link></li>
      <li><router-link :to="{name:'Directive'}">自定义指令directive</router-link></li>
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
