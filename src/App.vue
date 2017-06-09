<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
       <router-view></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
import share from '@/components/share'

export default {
  name: 'app',
  components:{
    "v-header":header,
    "v-footer":footer
  },
  computed:{
  },
  methods:{
  }
}
</script>

<style>
*{
  padding: 0;
  margin:0;
}
body{
  width: 100%;
  overflow-x: hidden;
  background:#0C0E13; 
}
#app {
  font-family: "Microsoft yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:#202632; 
  color: #2c3e50;
}
div{
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  vertical-align: middle;
  border:0;
}
input{
  outline: 0
}
.clearfix{}
.clearfix:after{
  content: "";
  width: 100%;
  height: 0;
  display: block;
  clear: both;
}
.l{
  float: left;
}
.r{
  float: right;
}
.content{
  width: 1200px;
  margin: 0 auto;
}
.yw{
  font-family: arial,verdana,Microsoft YaHei,Tahoma,Simsun,sans-serif
}
  .wrap_w{
    background-color: #fff;
  }
  .navkind{
    color: #333;
    padding: 20px 0 5px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    text-align: left;
    text-indent: 15px;
    font-size: 14px;
    font-weight: 700
  }
  .blue_block{
    width: 5px;
    height: 20px;
    background-color: #007aff;
  }  
  .loading{
    text-align: center;
    color: #999;
    font-size: 12px;
    padding: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 400ms
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
