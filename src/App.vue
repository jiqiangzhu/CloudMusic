<template>
<div>
  <Bottom />
  <router-view/>
</div>
  
</template>
<script>
import Bottom from './views/Bottom.vue'
export default {
  components: {
    Bottom
  },
  async mounted() {
    if(localStorage.userInfo != "" && localStorage.userInfo != undefined) {
      this.$store.state.user = JSON.parse(localStorage.userInfo)
      
    }
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // background: #efefef;
}
// .iconfont {
//   width: 0.3rem;
//   height: 0.3rem;
// }
a {
  color: #333;
  text-decoration: none;
}
</style>
