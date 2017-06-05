<template>
  <div class="banner">
     <div v-for="item in banner">
       <img :src="item" height="400" /></div >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [require("../assets/banner.png")]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
