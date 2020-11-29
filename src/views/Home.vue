<template>
  <div class="home">
    <TopNav />
    <Swiper />
    <IconList />
    <SetupMusicList />
    <Bottom :barFlag="true" :playFlag="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/views/Bottom.vue'
import Swiper from '@/components/Swiper.vue'
import IconList from '@/components/IconList.vue'
import RecMusicList from '@/components/RecMusicList.vue'
import SetupMusicList from '@/components/SetupMusicList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    Swiper,
    Bottom,
    IconList,
    RecMusicList,
    SetupMusicList
  }
  
}
</script>
<style lang="less">
  .home {
    width: 7.5rem;
    // height: 13.34rem;
    background: rgb(248,248,248);
    font-family: '微软雅黑';
  }
   .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

</style>
