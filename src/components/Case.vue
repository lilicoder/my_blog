<template>
	<div class="wrap_w">
		<div class="content">
			<div class="clearfix navkind">
				<span class="blue_block l"></span>
				案例展示
			</div>
		      <case-con :data="cases"></case-con>
		      <div class="loading" v-if="loading">加载中...</div>
	      </div>
    </div>
</template>
<script>
	import $ from 'jquery'
	import case_con from './case_con'
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
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/08/11",name:"冒泡事件",article:1,articleName:"浏览器原理解析",img:require("../assets/images/case1.png"),imgActive:require("../assets/images/case1_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")},
		          {date:"2017/04/12",name:"H5音乐播放器",article:1,articleName:"vue 全栈开发 外卖平台系统",img:require("../assets/images/case2.png"),imgActive:require("../assets/images/case2_active.png")}
		      ]
			}
		},
		components:{
			"case-con":case_con
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
.content{
	padding-bottom: 30px
}
</style>