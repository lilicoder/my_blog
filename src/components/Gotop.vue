<template>
	<div id="goTop" class="goTop">
	    <img src="../assets/images/gotop.png"/>
	</div>
</template>
<script>
import $ from 'jquery'
export default{  
  mounted(){
    var _this=this;
    //回到顶部
    var h=$(window).height();
    $(document).scroll(function(){
      var sh=$(document).scrollTop();
      if (h<sh)
      {
        $("#goTop").fadeIn();
      }
      else{
        $("#goTop").fadeOut();
      }
    })
    $("#goTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    }) 
	}
}
</script>
<style scoped>
	
</style>