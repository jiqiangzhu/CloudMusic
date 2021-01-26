<template>
  <div class="app">
    <Bottom />
    <router-view />
  </div>
</template>
<script>
import Bottom from './views/Bottom.vue'
export default {
  components: {
    Bottom
  },
  async mounted() {
    if (localStorage.userInfo) {
      this.$store.commit("setUser", JSON.parse(localStorage.userInfo));
      console.log("====>>>>>>>>localStorage.userInfo>>>>>>=====", this.$store.state.user);
    }
    
  },
  unmounted() {

  },
  methods: {
    
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
