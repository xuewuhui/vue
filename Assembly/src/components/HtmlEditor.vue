<!--vue-kindeditor html编辑器-->
<template>
  <div class="hello">
    <h1>vue-kindeditor html编辑器</h1>
    <editor id="editor_id" width="500px" height="400px" 
      :content="editorText"
      pluginsPath="/static/kindeditor/plugins/"
      :loadStyleMode="false"
      :items="['source', '|', 'undo', 'redo', '|', 'preview', 'print', 'cut', 'copy', 'paste', 'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript', 'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/', 'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'table', 'hr', 'image', 'emoticons', 'baidumap', 'pagebreak', 'anchor', 'link','unlink']"
      :extraFileUploadParams= "uploadUrls"
      @on-content-change="onContentChange"></editor>
    <button @click="handleEditorContent">获取editor内容</button>  
  </div>
</template>

<!-- 使用 editor 标签使用kindeditor。<editor  ...></editor>
参数：   
id: 设置编辑器的id，kindeditor创建使用需要用到，所以必填。例子：editor_id  
content: 用来获取编辑器内容，使用双向绑定获取编辑器内容数据。例子：editorText
extraFileUploadParams: array，该参数暂时用来存放七牛上传地址和获取上传token接口地址
loadStyleMode: 是否自动加载kindeditor需要的css文件，默认是从 / 查找，所以设置为false，搭配pluginsPath使用  
pluginsPath: 设置编辑器的plugins目录。例子中为了方便把kindeditor全部目录复制到了demo/static中了，实际使用中地址自行设置。-->

<script>
export default {
  name: 'HtmlEditor',
  data () {
    return {
      editorText: '请输入文字',
      uploadUrls: [
        'http://up.qiniu.com/', // 上传地址
        'http://test.mlpplus.gikoo.cn/api/v1/util/uptoken/' // 获取token地址
      ],
    }
  },
  methods: {

    // 监控输入文字
    onContentChange(val) {
      this.editorText = val
    },

    // 获取editor内容
    handleEditorContent() {
      console.log(this.editorText)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
