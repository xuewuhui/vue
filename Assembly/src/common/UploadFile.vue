<!--七牛上传图片控件-->
<template>
  <div class="thumbile">
    
    <!--选择文件-->
    <input ref="updateInput" class="update-input" name="file" type="file" accept="image/*;capture=camera" @change="handleChosenFile" />

    <!--图片裁剪-->
    <el-dialog
      title="提示"
      width="640px"
      :visible.sync="dialogVisible">
      <div class="cropper">
        <VueCropper 
          class="mask"
          ref="cropper"
          outputType="jpg"
          :img="options.url"
          :autoCrop="cropOptions && cropOptions.autoCrop"
          :autoCropWidth="cropOptions && cropOptions.autoCropWidth"
          :autoCropHeight="cropOptions && cropOptions.autoCropHeight"
          :fixed="cropOptions && cropOptions.fixed"
          :fixedNumber="cropOptions && cropOptions.fixedNumber"></vueCropper>
          ></VueCropper>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitPic">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script type="text/javascript">
import Constants from '@/assets/Constants'
import VueCropper from 'vue-cropper'

export default {
  name: 'UploadImage',
  props: ['cropper', 'cropOptions', 'successCallback', 'tips'], // cropper: 是否开启裁剪功能, cropOptions: 裁剪参数
  components: {
    VueCropper
  },
  data(){
    return{
      dialogVisible: false,
      type: 0, // 0：图片， 1：非图片， 2：pdf和MP4， 3：MP4
      options: {
        url: '',
        name: '',
      }
    }
  },
  watch: {
    cropper(news, old){
      this.cropper = news
    }
  },
  methods: {

    // 绑定更换图片事件
    handleUserIcon(type) {
      this.$refs.updateInput.value = '' // 重置上传控件
      this.type = type
      this.$refs.updateInput.click()
    },

    // 选择图片
    handleChosenFile(e) {

      // 设置文件名称
      let file = e.target.files[0];
      this.options.name = 'ebchina-material-' + new Date().getTime() + file.name.substring(file.name.lastIndexOf('.'))

      // 格式不正确
      if(!this.uploadImg(e)) return

      if(this.cropper){
        this.dialogVisible = true
      }
    },

    //上传图片
    uploadImg (e) {
      var file = e.target.files[0]

      // 图片
      if(this.type == 0){
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
         alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
         return false
       }
      }

      // 非图片
      if(this.type == 1){
        if (/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
         alert('上传文件格式不正确，请选择非图片类文件！')
         return false
       }
      }

      // pdf和MP4
      if(this.type == 2){
        if (!/\.(pdf|PDF|mp4|MP4)$/.test(e.target.value)) {
         alert(this.tips || '请上传pdf或者MP4文件！')
         return false
       }
      }

      // MP4
      if(this.type == 3){
        if (!/\.(mp4|MP4)$/.test(e.target.value)) {
         alert(this.tips || '请上传MP4文件！')
         return false
       }
      }
      
      var reader = new FileReader()

      // 读取成功后触发
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.options.url = data
      }

      // 转化为blob
      reader.readAsArrayBuffer(file) // 读取结果是一个 ArrayBuffer 对象

      // 读取完成后触发，不管是否成功。触发顺序排在 onload 或 onerror 后面
      if(this.cropper){
        reader.onloadend = () => {
          this.$refs.cropper.startCrop()  // 开始截图
        }
      }else{
        this.updateUserIcon(e)
      }
      return true
    },

    // 输出截取图片data
    handleSubmitPic () {
      this.$refs.cropper.getCropBlob((data) => {
        this.updateUserIcon(data)
      })
    },

    // 上传控件准备
    updateUserIcon(data){
      let file = data;
      let d = new Date();
      let type = data.type;
      if(!this.cropper){
        file = data.target.files[0]
        type = file.name.split('.')
      }
      let tokenParem = {
        'putPolicy':'{\"name\":\"$(fname)\",\"size\":\"$(fsize)\",\"w\":\"$(imageInfo.width)\",\"h\":\"$(imageInfo.height)\",\"hash\":\"$(etag)\"}',
        'key':'orderReview/'+d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+'/'+d.valueOf()+'.'+type[type.length-1],
        'bucket':this.domain,//七牛的地址，这个是你自己配置的（变量）
      };

      //创建form对象
      let param = new FormData(); //创建form对象
      param.append('file',file, this.name)

      // 设置文件key
      param.append('key', this.options.name)

      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };
      //先从自己的服务端拿到token
      axios.get(Constants.URL.uptoken_url).then(response=>{
        param.append('token', response.data.detail.token);
        this.uploading(param,config,file.name);//然后将参数上传七牛
        return;
      })
    },

    // 上传图片到七牛
    uploading(param,config,pathName){
      axios.post('http://up.qiniup.com',param,config)
        .then(response=>{
          this.dialogVisible = false
          const url = Constants.PARAMETER.QINIU_DOMAIN + response.data.key
          this.successCallback && this.successCallback(this.type, url)
        },(error)=>{
          this.$message.warning("上传失败，请稍后再试！")
        })
    },
    
  }
}
</script>

<style lang="stylus" scoped>
.thumbile{
  position: absolute
  top: -2000px
  .cropper{
    width: 600px
    height: 450px
    position: relative
    img{
      max-width: 100%;
      max-height: 100%;
    }
    .mask{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
