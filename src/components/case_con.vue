<template>
	      <div class="case_con">
	        <ul class="clearfix">
	          <li v-for="(item,index) in data" :style="{ backgroundImage:(index==case_activenum?'url('+item.imgActive+')':'url('+item.img+')')}" @mouseover="chageCaseNum(index)">
	            <div class="text_con" v-show="index==case_activenum" :style='[{left:(index%5>2?"-100%":"100%")},{top:((index+1)/5>2?"-80px":"0")}]'>
	              <div class="date">
	                <p class="day">{{item.date|day}}</p>
	                <p class="month">{{item.date|month}}</p>
	                <div class="title">{{item.name}}</div>
	                <router-link to="/case">查看案例效果 view the details</router-link>
	              </div>
	              <div class="article_link">
	                <p>{{item.name}}</p>
	                <router-link to="/read">相关文章解析 The instructions</router-link>
	              </div>
	            </div>
	          </li>
	        </ul>
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
				start:0
			}
		},
		 props: ['data'],
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
			console.log(this.data);
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
</style>