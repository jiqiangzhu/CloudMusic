<template>
<div class="app">
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
    if(window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
  },
  unmounted() {
    window.removeEventListener("popstate", this.goBack, false);
  },
  methods: {
    goBack() {
      this.$router.replace({path: '/'});
    }
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
