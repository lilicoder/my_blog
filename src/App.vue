<template>
  <div id="app">
    <v-header></v-header>
    <router-view>
      
    </router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'
export default {
  name: 'app',
  components:{
    "v-header":header,
    "v-footer":footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin:0;
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
</style>
