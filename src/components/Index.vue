<template>
<div class="wrap">
 <div class="swiper-container banner" id="swiper-container1" v-slider>
     <div class="swiper-wrapper">
       <div class="swiper-slide" v-for="item in banner" :style="{ backgroundImage:'url('+item+')'}" ></div>
     </div>
     <div class="swiper-pagination" id="swiper-pagination1"></div>
  </div>
  <div class="content">
      <div class="tit">我的技能 <span class="yw">MY SKILL</span></div>
      <div class="skill_con">
        <ul class="clearfix">
          <li v-for="item in skill">
            <div class="cvs">{{item.level}}</div>
            <p>{{item.name}}</p>
          </li>          
        </ul>
      </div>
      <div class="tit">最新文章 <span class="yw">NEWEST ARTICLE</span></div>
      <div class="article_con">
        <ul class="clearfix">
          <li v-for="item in articles">
            <div class="img_con">
              <img :src="item.img" width="290" height="240" />
              <div class="read">
                <span>阅读详细</span>
              </div>
            </div>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="tit">案例展示 <span class="yw">CASE SHOW</span></div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [
        require("../assets/images/banner1.png"),
        require("../assets/images/banner.png")        
      ],
      skill:[
        {name:"DIV+CSS",level:"85%"},
        {name:"JQUERY",level:"70%"},
        {name:"VUE",level:"70%"},
        {name:"REACT",level:"30%"},
        {name:"LESS",level:"60%"},
        {name:"AIR TEMPLATE",level:"40%"},
        {name:"PS",level:"50%"},
        {name:"SEO",level:"30%"}
      ],
      articles:[
        {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at1.jpg")},
         {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg")},
          {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg")},
           {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg")},
            {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at5.jpg")},
             {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at1.jpg")},
              {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg")},
               {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg")},

      ]
    }
  },
  directives:{
    slider:{
      inserted:function(el){
        var mySwiper = new Swiper("#swiper-container1", {
            autoplay: 2000,//可选选项，自动滑动
            loop:true,
            pagination : '#swiper-pagination1',
            paginationType:"progress"
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner .swiper-slide{
  height: 400px;
  background-position: center;
}
.tit{
  line-height: 30px;
  font-size: 16px;
  color: #a2c71c; 
  text-align: left;
  padding:25px 0 15px 
}
.tit>span{
  color: #999;
  padding-left: 15px;
  font-size: 12px;
}
.skill_con{
  background:#161825;
  border-radius: 5px
 }
 .skill_con ul li{
  width: 12.5%;
  float: left;
  color: #fff;
  font-size: 12px;padding: 20px 0
 }
 .skill_con ul li .cvs{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    line-height: 90px;
    border:5px solid #a2c71c;
    margin:20px auto 10px;
    font-size: 16px
  }
  .article_con{
    background:#161825;
    padding: 10px
  }
  .article_con ul li{
    width: 25%;
    float: left;
    padding: 2px;
    text-align: left;
    margin-bottom: 15px;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .article_con ul li .img_con{
    position: relative;
    overflow: hidden;
  }
  .article_con ul li .img_con span{
    position: absolute;
    top: 100px;
    left: 105px;
    width: 80px;
    line-height: 30px;
    background: #ffb901;
    text-align: center;
    color: #000;
  }
  .article_con ul li .img_con .read{
    position: absolute;
    top:100%;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 500ms;
    background: rgba(255,255,255,0.4);
  }
  .article_con ul li .img_con:hover .read{
     top: 0
  }
  .article_con ul li img{
    max-width: 100%
  }
  .article_con ul li p{
    line-height: 30px;
    font-size: 16px;
  }
</style>
