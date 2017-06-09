<template>
  <div class="share" id="share">分享到
     <div class="con" >
       <a :href="item.url" v-for="item in sharelink">
         <img :src="item.img" width="20px">
         {{item.name}}
       </a>
     </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
data(){
    return{ 
      shareFlag:false
  }
},
computed:{
      ...mapState([
        "sharelink"
      ])
    },
  mounted(){
     var _this=this;
     var h=$(window).height();
     $("#share").css({top:h/2-$("#share").height()/2});
     $(document).scroll(function(){
        var sh=$(document).scrollTop();
        $("#share").stop().animate({top:h/2-$("#share").height()/2+sh},500);
         //分享
        $("#share").css({top:h/2-$("#share").height()/2});
     })
      $("#share").click(function(){
        if( _this.shareFlag){
          $(this).animate({right:0},200);
        }
        else{
          $(this).animate({right:50},200);
        }
        _this.shareFlag=!_this.shareFlag;
      })
}
}
</script>
<style scoped>
    .share{
      width: 30px;
      background-color: #007AFF;
      position: absolute;
      right: 0;
      top: 600px;
      color: #fff;
      padding:10px 0;
      border-radius: 3px 0 0 3px;
      cursor: pointer;
      z-index: 1
    }
    .share .con{
      position: absolute;
      top: -50px;
      left: 30px;
      width: 50px;
      background-color: #fff;
      border-radius: 3px 0 0 3px;
      overflow: hidden;
      padding: 5px 0;
    }
    .share a{      
      display: block;
      font-size: 12px;
      padding:  5px 0
    }
    .share a:hover{
      background-color: #eee
    }
    .share a img{
      display: block;
      margin:0 auto;
    }

</style>