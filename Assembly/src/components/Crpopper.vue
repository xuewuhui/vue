<!--组织结构-->
<template>
  <div class="hello">
    <h1>图片裁剪</h1>

    <div class="thumbile">
      <img style="width: 200px;height:200px;background-color:#f2f2f2;" :src="url" /><br/>
      <span style="cursor:pointer" @click="handleUploadFile">+上传文件</span>
    </div>

    <!--上传文件-->
    <UploadFile ref="UploadFile" :cropper="true" :cropOptions="cropOptions" :successCallback="handleChangeImg"></UploadFile>

  </div>
</template>

<script>
import Constants from '@/assets/Constants'
import UploadFile from '../common/UploadFile'

export default {
  name: 'Crpopper',
  components: {
    UploadFile,
  },
  data () {
    return {
      url: '',
      cropOptions: {
        autoCrop: true,
        autoCropWidth: 400,
        autoCropHeight: 300,
        fixed: true, // 开启宽度和高度比例
        fixedNumber: [4, 3]
      }
    }
  },
  methods: { 

    // 绑定更换图片事件
    handleUploadFile() {
      this.$refs.UploadFile && this.$refs.UploadFile.handleUserIcon(0)
    },

    // 更换图片地址
    handleChangeImg(type, url) {
      this.url = url
    }


    

  }
}
</script>
