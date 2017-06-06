<template>
  <div class="main_nav">
      <div class="content clearfix">
        <div class="logo l"><img src="../assets/images/logo.png"/></div>
        <div class="menu l" id="menu">
          <ul class="clearfix menuul">
            <li v-for="(item,index) in menu" :class="{active:index==activeMenu}" @mouseover="onMenu(index)" @mouseout="offMenu(index)">
            {{item.name}}
            <ul v-if="item.list&&item.list.length!=0" class="list">
              <li v-for="(item_l,index) in item.list" :class="{bornone:index==item.list.length-1}">{{item_l}}</li>
            </ul>
            </li>
          </ul>
        </div>
        <div class="login_con l">
          <div id="login_before" class="l clearfix">
             <div class="btn login_con_item"><a href="">登录</a></div>
             <div class="btn login_con_item"><a href="" class="register">注册</a></div>
           </div>
            <div id="login_after" class="l clearfix">
              <div class="name l">lory 糖糖</div>
              <a href="" class="loginOut" id="loginOut">退出</a>
            </div>
        </div>
        <div class="search r">
          <div class="search_icon" @click="searchT"></div>
          <div class="search_input">
            <input type="" name="" placeholder="搜索你想要的..." />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return{
       activeMenu:0,
       search:false,
       menu:[
        {name: "主页",list:[]},
        {name: "笔记",list:["HTML5","cavas","react","vue","webpack","node"]},
        {name: "案例展示",list:[]},
        {name: "工具分享",list:[]},
        {name: "关于我",list:[]}
       ]
    }
   
  },
  methods:{
    searchT:function(){
     if(this.search){
      $(".search_input").animate({width:0});
     }
     else{
      $(".search_input").animate({width:1000});
     }
     this.search=!this.search;
    },
    onMenu:function(index){
      $(".menuul>li").eq(index).find(".list").stop().slideDown();
    },
    offMenu:function(index){
       $(".menuul>li").eq(index).find(".list").stop().slideUp();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_nav{
  line-height: 70px;
  background: #171a21;
  border-bottom: 2px solid #000;
  color: #a2c71c;
  font-size: 14px
}
.menu{
  margin:0 60px
}
.menuul>li{
  float: left;
  padding:0 45px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
}
.menuul>li.active{
  border-bottom: 3px solid #a2c71c;
  border-radius: 1px
}
.menuul>li:hover{
  background: #0c0e13
}
.list{
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #a2c71c;
  color: #fff;
  line-height: 40px;
  border-bottom: 1px solid #fff;
  z-index: 2;
  display: none
}
.list li{
  border-bottom: 1px solid #ddd;
}
.list li:hover{
  border-color: #fff
}
.logo{
  width: 160px;
}
.login_con{

}
.login_con_item{
  float: left;
  padding: 0 10px;
  font-size: 12px
}
.login_con_item a{
  border:1px solid #a2c71c;
  border-radius: 3px;
  padding:3px 10px;
  color: #ccc
}
.login_con_item a.register{
  border-color: #ccc
}
.login_con_item a:hover{
  border-color:#a2c71c;
  color:#a2c71c; 
}
.login_con .name{
  padding: 0 10px
}
.loginOut{
  color: #ccc;
}
#login_after{  
  display: none
}
.search{
  width: 24px;
   position: relative;
 
}
.search_icon{
  width: 24px;
  height: 24px;
  background-image: url(../assets/images/icon/search.png);
  background-size: contain;
  margin-top: 20px;
  cursor: pointer;
}
.search_input{
  position: absolute;
  width: 1000px;
  right:30px;
  top: 0;
  background-color: #171a21;
  border-bottom: 3px solid #171a21; 
  width: 0 
}
.search_input input{
  width: 95%;
  line-height: 50px;
  border:0;
  margin: 0 auto;
  background: transparent;
  border-bottom: 1px solid #a2c71c;
  color: #fff;
}

</style>