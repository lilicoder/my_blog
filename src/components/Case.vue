<template>
	<div class="wrap_w">
		<div class="content">
			<div class="clearfix navkind">
				<span class="blue_block l"></span>
				案例展示
			</div>
		      <div class="case_con">
		        <ul class="clearfix">
		          <li v-for="(item,index) in cases" :style="{ backgroundImage:(index==case_activenum?'url('+item.imgActive+')':'url('+item.img+')')}" @mouseover="chageCaseNum(index)">
		            <div class="text_con" v-show="index==case_activenum" :style='[{left:(index%5>2?"-100%":"100%")},{top:((index+1)/5>2?"-80px":"0")}]'>
		              <div class="date">
		                <p class="day">{{item.date|day}}</p>
		                <p class="month">{{item.date|month}}</p>
		                <div class="title">{{item.name}}</div>
		                <router-link to="/">查看案例效果 view the details</router-link>
		              </div>
		              <div class="article_link">
		                <p>{{item.name}}</p>
		                <router-link to="/">相关文章解析 The instructions</router-link>
		              </div>
		            </div>
		          </li>
		        </ul>
		      </div>
		      <div class="loading" v-if="loading">加载中...</div>
	      </div>
    </div>
</template>
<script>
	import $ from 'jquery'
	export default{
		data(){
			return{
				loading:false,
				case_activenum:0,
				count:20,
				start:0,
				cases:
				[
		          {date:"2017/05/06",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/05/07",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/06/24",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/02/15",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/08/11",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/05/06",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/05/07",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/06/24",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/02/15",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/08/11",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")}
		      ]
			}
		},
		 filters:{
		  day:function(el){
		   return el.substring(el.length-2,el.length);
		  },
		  month:function(el){
		    return el.substring(0,el.length-3);
		  }
 		 },
 		 methods:{
		    chageCaseNum(num){
		      this.case_activenum=num;
		    }
		  },
		 mounted(){
			var _this=this;
			$(document).scroll(function(){
				if($(document).scrollTop()>(200+_this.start/_this.count*240)){
					_this.loading=true;	
				}
			})
		}
	}
</script>
<style scoped>
	.case_con ul li{
    float: left;
    width: 240px;
    height: 240px;
    background-size: cover;
    cursor: pointer;
    background-position: center;
    position: relative;
  }
  .text_con{
    position: absolute;
    width: 100%;
    height: 320px;
    top:0;
    left: 100%;
    z-index: 2;
    border:3px solid #ffb901;
    font-size: 12px;
  }
  .text_con .date{
    background-color: #ffb901;
    text-align: right;
    height: 240px;
    padding: 30px;
    cursor: auto;
  }
  .text_con .date .day{
    padding: 20px 0 5px;
    font-size: 36px;
   }
   .text_con .date .title{
    padding: 30px 0 5px;
    font-size: 14px;
   }
   .text_con .date a{
    color: #333
   }
   .text_con a:hover{
    text-decoration: underline;
   }
   .article_link{
    color: #fff;
    text-align: right;
    padding: 10px 20px;
   }
   .article_link p{
    padding:5px;  
   }
   .article_link a{
    color: #fff;  
   }
   .loading{
	text-align: center;
	color: #999;
	font-size: 12px;
	padding: 20px;
}
</style>