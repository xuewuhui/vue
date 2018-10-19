<template>
	<div class="">
		
		编译前：<div v-html="title"></div>
		编译后：<br />{{title}}

		<el-input type="textarea" v-model="sender"></el-input>
		<el-button @click="checkMap">确定</el-button>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'FilterHtml',
	data() {
		return {
			title: '',
			sender: '', 
		}
	},
	mounted(){

		// “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容
		let sender = '<script>alert("abc")<\/script>'; // 恶意代码
		let message = this.SaferHTML`<p>${sender} has sent you a message.</p>`;
		// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>
		this.title = sender
		this.sender = sender
		console.log(sender)
		console.log(message)
	},
	methods: {

		//
		checkMap() {
			console.log(this.sender)
			let message =
  this.SaferHTML`<p>${this.sender} has sent you a message.</p>`;
  		this.title = message
  		console.log(message)
		},

		SaferHTML(templateData) {
		  let s = templateData[0];
		  for (let i = 1; i < arguments.length; i++) {
		    let arg = String(arguments[i]);

		    // Escape special characters in the substitution.
		    s += arg.replace(/&/g, "&amp;")
		            .replace(/</g, "&lt;")
		            .replace(/>/g, "&gt;");

		    // Don't escape special characters in the template.
		    s += templateData[i];
		  }
		  return s;
		}
	}
}	
</script>
