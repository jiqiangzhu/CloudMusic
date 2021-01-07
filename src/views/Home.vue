<template>
  <div class="home">
    <TopNav />
    <Swiper ref="mySwiper" :imgList="imgList" style="position: relative" :autoplay="true">
      <template v-slot="slotProps">
        <img :src="slotProps.item.pic" alt />
        <span
          class="tag"
          style="position: absolute; bottom: 5px; right: 20px; background:red;padding: 0 5px; border-radius: 3px;color:#fff;"
        >新歌首发</span>
      </template>
    </Swiper>
    <IconList />
    <SetupMusicList />
    <CSS3D class="css-3d" />
    <!-- <SetupMusicList />
    <SetupMusicList />-->
    <!-- <button @click="$refs.mySwiper.swiper.slideNext()">下一页</button> -->

    <!-- <playCtl :tracks="$store.state.playlist" v-if="true" class="play-ctl" /> -->
    <!-- <Bottom :barFlag="true" :playFlag="false"/> -->
    <!-- <Bottom /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/views/Bottom.vue'
import Swiper from '@/components/Swiper.vue'
import IconList from '@/components/IconList.vue'
import RecMusicList from '@/components/RecMusicList.vue'
import SetupMusicList from '@/components/SetupMusicList.vue';
import CSS3D from '@/components/CSS3D.vue';
import playCtl from '@/views/playCtl.vue'
import { getBanner } from '../api/index'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    TopNav,
    Swiper,
    Bottom,
    IconList,
    RecMusicList,
    SetupMusicList,
    playCtl,
    CSS3D
  },
  data() {
    return {
      imgList: [
        { pic: require('../assets/img/swiper1.jpg') },
        { pic: require('../assets/img/swiper2.jpg') },
        { pic: require('../assets/img/swiper3.jpg') }
      ]
    }
  },
  methods: {
    ...mapMutations(['setPlayFlag'])
  },
  async beforeMount() {
    let res = await getBanner(1);
    this.imgList = res.data.banners;
    this.$store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: true });
    
    if(localStorage.playlist) {
      let localPlayList = JSON.parse(localStorage.playlist);
      console.log(localPlayList);
      this.$store.commit("setPlayList", localPlayList)
    }
  },
  beforeUnmount() {
    // this.$store.commit('setPlayFlag', {playControlFlag: true, navBarFlag: false})
  },
  mounted() {

  },
  unmounted() {

  }

}
</script>
<style lang="less">
.home {
  width: 7.5rem;
  background: rgb(248, 248, 248);
  font-family: "微软雅黑";
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // position: fixed;
  // left: 0;
  // top: 1rem;
  // z-index: 1;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.play-ctl {
  background: #fff;
}
</style>
