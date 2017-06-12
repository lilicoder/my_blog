<template>
<div class="wrap">
 <div class="swiper-container banner" id="swiper-container1" v-slider>
     <div class="swiper-wrapper">
       <div class="swiper-slide" v-for="item in banner" :style="{ backgroundImage:'url('+item+')'}" ></div>
     </div>
     <div class="swiper-pagination" id="swiper-pagination1"></div>
  </div>
  <div class="content">
  <!-- 技能 -->
      <div class="tit">我的技能 <span class="yw">MY SKILL</span><!-- <router-link to="/">查看更多</router-link> --></div>
      <div class="skill_con">
        <ul class="clearfix">
          <li v-for="item in skill">
            <div class="cvs">
                <canvas class="canvas" v-draw.num="item.level" width="100" height="100">
                  
                </canvas>
            </div>
            <p>{{item.name}}</p>
          </li>          
        </ul>
        <div class="notice">
          {{notice.con}}
          <span>{{notice.date}}</span>
        </div>
      </div>
      <!-- 文章 -->
      <div class="tit">最新文章 <span class="yw">NEWEST ARTICLE</span><router-link to="/article">查看更多</router-link></div>
      <div class="article_con">
        <ul class="clearfix">
          <li v-for="item in articles">
              <router-link :to="{'name':'read'}">
                <div class="img_con">
                  <img :src="item.img" width="290" height="240" />
                  <div class="read">
                    <span>阅读详细</span>
                  </div>
                </div>
                <p>{{item.name}}</p>
              </router-link>
          </li>
        </ul>
      </div>
      <!-- 案例 -->
      <div class="tit">案例展示 <span class="yw">CASE SHOW</span><router-link to="/case">查看更多</router-link></div>
      <case-con :data="cases"></case-con>
      <!-- 生活 -->
       <div class="tit">我的生活 <span class="yw">MY LIFE</span><router-link to="/">查看更多</router-link></div>
       <div class="life_con clearfix">
         <div class="main l" :style="[{backgroundImage:'url('+life[0].img+')'}]">
            <div class="con">
             <div class="con_tit">I LOVE <br/><span>{{life[0].name}}</span></div>
             <div class="line "></div>
             <p>{{life[0].des}}</p>
           </div>
         </div>
         <div class="list r">
           <div class="one clearfix">
             <div class="first l" :style="[{backgroundImage:'url('+life[1].img+')'}]"></div>
             <div class="second l" :style="[{backgroundImage:'url('+life[2].img+')'}]"></div>
           </div>
            <div class="two clearfix">
              <div class="third l" :style="[{backgroundImage:'url('+life[3].img+')'}]"></div>
              <div class="fourth l" :style="[{backgroundImage:'url('+life[4].img+')'}]"></div>
              <div class="fifth l" :style="[{backgroundImage:'url('+life[5].img+')'}]"></div>
              <div class="sixth l" :style="[{backgroundImage:'url('+life[6].img+')'}]"></div>
            </div>
         </div>
       </div>
       <!-- 友情链接 -->
       <div class="tit">友情链接 <span class="yw">FIEND LINK</span></div>
       <div class="friendl_con">
         <ul class="clearfix">
           <li v-for="item in friendlink">
             <a :href="item.url">
               {{item.name}}
             </a>
           </li>
         </ul>
       </div>
  </div>
  <!-- 回到顶部 -->
  <v-go></v-go>
  <!-- 分享到 -->
  <v-share></v-share>
  </div>
</template>

<script>
import $ from "jquery"
import share from "@/components/share"
import gotop from "@/components/Gotop"
import case_con from "@/components/case_con"
export default {
  data () {
    return {
      case_activenum:0,
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
      notice:{
        date:"2017/05/06",
        con:"端午放假不更文"
      },
      articles:[
        {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at1.jpg")},
         {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg")},
          {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at3.jpg")},
           {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg")},
            {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at5.jpg")},
             {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at1.jpg")},
              {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at4.jpg")},
               {name:"vue 全栈开发 外卖平台系统",id:1,img:require("../assets/images/at2.jpg")},

      ],
      cases:[
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
      ],
      friendlink:[
        {name:"某某的博客",url:"/"},
         {name:"某某的博客",url:"/"},
          {name:"某某的博客",url:"/"},
           {name:"某某的博客",url:"/"},
      ],
    life:[
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/one.gif")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/1.jpg")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/2.jpg")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/3.jpg")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/4.jpg")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/5.jpg")},
      {name:"THE ILLUSRATION",des:"生活不止眼前的苟且 还有诗和远方",img:require("../assets/images/6.gif")}
    ]
  }
  },
  components:{
    "v-share":share,
    "v-go":gotop,
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
    },
    draw:{
      inserted:function(el,param){
        function Cavas_pecent(json){
            this.w=json.w;
            this.h=json.h;
            this.timer=null;
            this.deg=0;
            this.new_deg=json.new_deg,
            this.obj=json.obj;
            this.color=json.color;
            this.stroke_color=json.stroke_color;
            this.pecent_f=json.pecent_f;
            this.lineWidth=json.lineWidth;
            this.bg_color=json.bg_color;
          }
          Cavas_pecent.prototype.draw = function() {
              var txt=this.deg+"%";
              this.obj.lineCap="round";
              this.obj.lineWidth=this.lineWidth;
              this.obj.strokeStyle = this.stroke_color;
              this.obj.beginPath();
              this.obj.arc(this.w/2,this.h/2,this.w/2-this.lineWidth,0,this.deg/100*Math.PI*2);
              this.obj.fillStyle="#fff";
              this.obj.font="16px Arial"; 
              this.obj.fillText(txt , 50 - this.obj.measureText(txt).width/2 ,55);
              this.obj.stroke();
          }
          Cavas_pecent.prototype.drawBg = function(){
            this.obj.beginPath();
              this.obj.strokeStyle=this.bg_color;
              this.obj.arc(this.w/2,this.h/2,this.w/2-this.lineWidth,0,100*Math.PI*2);
              this.obj.stroke();
              this.obj.save();
              return this;
          }
          Cavas_pecent.prototype.go_draw = function(){
              var _this=this;
              _this.timer=setInterval(function(){
              if(_this.deg==_this.pecent_f){
                  clearInterval(_this.timer);
                }
                else{
                  _this.deg++;
                  _this.obj.clearRect(0,0,150,300);
                  _this.drawBg().draw()
                }
              },30)
          }
          el.ca=new Cavas_pecent({
              w:el.offsetWidth,
              h:el.offsetHeight,
              obj:el.getContext("2d"),
              color:"#a24565",
              stroke_color:"#a2c71c",
              pecent_f:parseInt(param.value),
              lineWidth:5,
              bg_color:"#ccc"
            })
         el.ca.go_draw();
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
.tit a{
  float: right;
  color: #999;
  font-size: 12px;
  margin-right: 10px
}
.skill_con{
  background:#161825;
  border-radius: 5px;
  padding-bottom: 10px;
 }
 .skill_con ul li{
  width: 12.5%;
  float: left;
  color: #fff;
  font-size: 12px;padding: 20px 0
 }
 .skill_con ul li .cvs{
  }
  .notice{
    margin: 10px 30px 0;
    border-top: 1px solid #666;
    text-align: left;
    font-size: 12px;
    line-height: 40px;
    color: #999;
    background: url("../assets/images/notice.png") no-repeat left center;
    padding-left: 25px;
  }
  .notice span{
    float: right;
  }
  /*文章*/
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
  .article_con ul li a{
      color: #ddd;
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
  /*案例*/
 
  /*友情链接*/
   .friendl_con{
    padding-bottom: 20px
   }
   .friendl_con ul li{
      display: inline-block;
      float: left;
      margin-right: 15px;
      font-size: 12px
   }
   .friendl_con ul li a{ 
      background-color: #1d1e23;   
      color: #999;
      line-height: 30px;
      padding: 0 10px;
      display: block;
   }
   .friendl_con ul li a:hover{
      background-color: #a2c71c;    
      color: #fff
   }
   .life_con .main{
    width: 360px;
    height: 600px;
    background-size: cover;
    line-height: 36px;
    transition: all 1s
   }
    .life_con .main:hover{
      background-position: right;
    }
    .life_con .con{
      background-color: rgba(255,255,255,0.3);
      height: 100%;
      padding-left: 25px;
    }
    .life_con .con_tit{
      font-size: 48px;
      font-weight: 700;
      padding-top: 220px;
      text-align: left;
    }
    .life_con .con_tit span{
      color: #ffb901;
      font-size:30px;
    }
    .life_con .line{
      width: 60px;
      height: 5px;
      background-color: #ccc;
      margin:8px 0 5px;
    }
    .life_con p{
      text-align: left;
      font-size: 14px;
      color: #333
    }
    .life_con .list{      
      width: 840px;
    }
    .life_con .one{
      height: 330px;
    }
    .life_con .two{
      height: 270px;
    }
    .life_con .one>div,.life_con .two>div{      
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 1s;

    }
    .life_con .one>div:hover,.life_con .two>div:hover{
      background-position: bottom;
    }
    .life_con .first{
      width: 510px;
    }
    .life_con .second{
      width: 330px;
    }
    .life_con .third,.life_con .fourth{
      width: 180px;
    }
     .life_con .fifth{
      width: 240px;
    }
    .life_con .sixth{
      width: 240px;
    }
    .goTop{
      position: fixed;
      bottom: 20px;
      right: 0px;
      cursor: pointer;
      display: none;
    }
   
</style>
