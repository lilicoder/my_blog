<template>
  <div class="footer">
  	<div class="icon clearfix">
  		<div v-for="(item,index) in footercon" :class="{bornone:index==footercon.length-1}" class="item">
  			<img :src="item">
  		</div>
  	</div>
  	<div class="linkme clearfix">
  		<a href="item.href" v-for="item in linkme">
  			<img :src="item.src">
  		</a>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     footercon:[
     	require("../assets/images/logo.png"),
     	require("../assets/images/text.png"),
     	require("../assets/images/cat.png"),
     ],
     linkme:[
     	{href:"",src:require("../assets/images/icon/qq.png")},
     	{href:"",src:require("../assets/images/icon/wx.png")},
     	{href:"",src:require("../assets/images/icon/git.png")},
     	{href:"",src:require("../assets/images/icon/blog.png")}
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	background:#0c0e13;
	padding:30px 0 ;
	 }
.icon{
	padding: 20px 0;
	width: 600px;
	margin: 0 auto;
}
.item{
	float: left;
	height: 100%;
	height: 80px;
	border-right: 1px solid #333
}
.item img{
	max-width: 200px;
	max-height: 80px
}
.bornone{
	border: 0
}
.linkme{
	width: 600px;
	margin: 0 auto
}
.linkme a{
	float: left;
	margin-right: 16px
}
</style>
