<template>
	<div class="wrap_w">
		<div class="content">
			<div class="clearfix navkind">
				<span class="blue_block l"></span>
				笔记
			</div>
			<div class="select_kind">
				<div class="content clearfix">
					<div class="select_name l">分类：</div>
					<ul class="clearfix">
						<li class="l" v-for="item in article_kind">
							<input name="kind" type="checkbox" :id="item" v-model="checkedNames" :value="item" @click="getVal">
							<label :for="item">{{item}}</label>
						</li>
					</ul>
				</div>
				<!-- {{checkedNames}} -->
				<div class="content clearfix">
					<div class="select_name l">排序方式：</div>
					<ul class="clearfix">
						<li class="l">
							<input name="way" type="checkbox" id="time" v-model="checkedways" value="time" @click="getVal">
							<label for="time">按时间排序</label>
						</li>
						<li class="l">
							<input name="hot" type="checkbox" id="hot" v-model="checkedways" value="hot" @click="getVal">
							<label for="hot">热度</label>
						</li>
					</ul>
				</div>
				<!-- {{checkedways}} -->
			</div>
			<div class="article_con">
				<ul class="clearfix">
					<li v-for="item in article" class="l">
					<router-link :to="{name:'read'}">
							<div class="img_con">
								<img :src="item.img"/>
							</div>
							<div class="tit">{{item.name}}</div>
							<div class="look clearfix">
								<span class="see_icon"></span><p>{{item.see}}</p>
								<span class="say_icon"></span><p>{{item.chart}}</p>
							</div>
							<div class="des">{{item.des}}...</div>
					</router-link>
					</li>
				</ul>
			</div>
			<div class="loading" v-if="loading">加载中...</div>
		</div>
	</div>
</template>
<script>
	import {mapState ,mapMutations ,mapActions} from 'vuex'
	import $ from 'jquery'
	export default{
		data:function(){
			return {
				checkedNames:[],
				checkedways:[],
				count:20,
				start:0,
				loading:false,
				article:[ 
					{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at1.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	          		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	            	{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at6.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at6.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45},
	         		{name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg"),des:"Iconfont-国内功能很强大且图标内容很丰富的矢量图标库",see:36265,chart:45}
	               ]
			}
		},
		computed:{
			...mapState([
				"article_kind"
			])
		},
		methods:{
			getVal(){
				$(event.path[1]).toggleClass("active")
			}
		},
		mounted(){
			var _this=this;
			$(document).scroll(function(){
				if($(document).scrollTop()>(200+_this.start/_this.count*300)){
					_this.loading=true;	
				}
			})
		}
	}
</script>
<style type="text/css" scoped>
.select_kind{
	line-height: 30px;
	background-color: #f8f8f8;
	border-radius: 3px;
	padding: 20px 20px 5px 20px;
	font-size: 12px;
}
.select_kind ul li{
	padding: 0 10px;
	background-color: #eee;
	margin: 0 10px;
	cursor: pointer;
	border-radius: 2px;
	cursor: pointer;
}
.select_kind ul li input{
	display: none;
}
.select_kind ul li label{
	cursor: pointer;
}
.select_kind ul li.active{
	background-color: #007aff;
	color: #fff;
}
.select_kind .content{
	margin-bottom: 20px;
}

/*列表*/
.article_con{
	margin: 20px 0 0;
	padding-bottom: 20px;
	border:1px solid #f8f8f8;
}
.article_con ul li{
	width: 299px;
	padding: 20px;
	box-sizing: border-box;
	transition: all 500ms;
	text-align: left;
	font-size: 16px;
	background-color: #fff;
}
.article_con ul li a{	
	color: #000;
}
.article_con ul li .tit{	
	font-weight: 500;
	padding: 5px 0
}
.article_con ul li .look{
	font-size: 12px
}
.article_con ul li .look span{
	float: left;
	width: 16px;
	height: 16px;
	background-size: cover;
	float: left;
	margin-right: 3px;
}
.article_con ul li .look p{
	float: left;
	margin-right: 10px;
}
.article_con ul li .look span.see_icon{
	background-image: url("../assets/images/icon/eye.png");
}
.article_con ul li .look span.say_icon{
	background-image: url("../assets/images/icon/chart.png");
}
.article_con ul li:hover{
	box-shadow: 0 0 10px #ccc;
	transform: translateY(-2px);
}
.article_con ul li .img_con{
	height: 180px;
	overflow: hidden;
}
.article_con ul li .des{
	font-size: 12px;
	color: #333
}
.article_con ul li img{
	max-width: 100%
}
</style>