<template>
  <div class="home">
    <div class="scroll">
      <TopNav class="top-nav" />
      <Swiper
        ref="mySwiper"
        class="swiper"
        :imgList="imgList"
        style="position: relative"
        :autoplay="true"
      >
        <template v-slot="slotProps">
          <img :src="slotProps.item.pic" alt />
          <span
            class="tag"
            style="position: absolute; bottom: 5px; right: 20px; background:red;padding: 0 5px; border-radius: 3px;color:#fff;"
          >新歌首发</span>
        </template>
      </Swiper>
      <IconList class="iconlist" />
      <SetupMusicList class="musiclist" />
      <CSS3D class="css-3d" />

      <img src="../assets/iconlist/3.png" alt=" " class="bg" />
    </div>
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
    this.$store.commit("setNavArr", { index: 0 });
    if (localStorage.playlist) {
      let localPlayList = JSON.parse(localStorage.playlist);
      this.$store.commit("setPlayList", localPlayList)
    }
  },
  mounted() {

  }

}
</script>
<style lang="less">
.home {
  .scroll {
    width: 7.5rem;
    font-family: "微软雅黑";
    width: 7.5rem;
    overflow: hidden;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .top-nav {
      z-index: 100;
    }
    .swiper {
      z-index: 10;
    }
    .iconlist {
      z-index: 10;
    }
    .musiclist {
      z-index: 10;
    }
    .css-3d {
      z-index: 10;
    }
    .bg {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      filter: blur(2px);
    }
  }
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
