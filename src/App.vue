<template>
  <div class="app">
    <Bottom />
    <!--这里是需要keepalive的-->
    <!-- <keep-alive> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.meta.title" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>
<script>
import Bottom from './views/Bottom.vue'
export default {
  name: "App",
  components: {
    Bottom
  },
  async mounted() {
    if (localStorage.userInfo) {
      this.$store.commit("setUser", JSON.parse(localStorage.userInfo));
      console.log("====>>>>>>>>localStorage.userInfo>>>>>>=====", this.$store.state.user);
    }

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
