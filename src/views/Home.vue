<template>
  <div class="home">
    <div class="scroll">
      <TopNav class="top-nav" />
      <Swiper
        @click="swiperFn"
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
      <img src="../assets/iconlist/3.png" :alt="'背景图'" class="bg" />
    </div>
    <div class="dialog" v-show="birthFlag">
      <img src="../assets/duanzi/close1.png" @click="closeFn" class="close" alt="关闭" />
      <BGMCom class="birth" />
    </div>
    <van-checkbox
      v-show="birthFlag"
      :icon-size="25"
      :shape="'square'"
      class="show-dialog"
      checked-color="#ee0a24"
      v-model="showDialogFlag"
    >不再显示</van-checkbox>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Bottom from '@/views/Bottom.vue';
import Swiper from '@/components/Swiper.vue';
import IconList from '@/components/IconList.vue';
import RecMusicList from '@/components/RecMusicList.vue';
import SetupMusicList from '@/components/SetupMusicList.vue';
import CSS3D from '@/components/CSS3D.vue';
import playCtl from '@/views/playCtl.vue';
import { getBanner } from '../api/index';
import { mapMutations, mapState } from 'vuex';
import { Checkbox, Toast, Skeleton as VanSkeleton, PullRefresh as VanPullRefresh } from 'vant';
import BGMCom from '@/components/BGMCom.vue';

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
    CSS3D, VanSkeleton,
    BGMCom, "van-checkbox": Checkbox, VanPullRefresh
  },
  data() {
    return {
      birthFlag: true,
      loading: false,
      imgList: [
        { pic: require('../assets/img/swiper1.jpg') },
        { pic: require('../assets/img/swiper2.jpg') },
        { pic: require('../assets/img/swiper3.jpg') }
      ],
      showDialogFlag: false
    }
  },

  computed: {
    ...mapState(['refreshSearch']),
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.loading = false;
      }, 3000)
    },
    ...mapMutations(['setPlayFlag']),
    neverShow() {
      this.showDialogFlag = !this.showDialogFlag
    },
    swiperFn() {
      Toast("敬请期待...");
    },
    closeFn() {
      console.log("======>>>>>>>this.showDialogFlag>>>>>>=====", this.showDialogFlag);
      if (this.showDialogFlag) {
        localStorage.showDialogFlag = this.showDialogFlag;
      }
      this.birthFlag = !this.birthFlag;
    }

  },
  async beforeMount() {
    if (localStorage.showDialogFlag) {
      this.birthFlag = false;
    }
    let res = await getBanner(1);
    this.imgList = res.data.banners;
    this.$store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: true });
    this.$store.commit("setNavArr", { index: 0 });
  },
  mounted() {
    this.$store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: true });
    this.$store.commit("setNavArr", { index: 0 });
    this.loading = false;
  },
  updated() {
    this.$store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: true });
    this.$store.commit("setNavArr", { index: 0 });
  }

}
</script>
<style lang="less">
.home {
  .dialog {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: rgba(159, 159, 159, 0.7);
    .close {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 4rem;
      right: 0.5rem;
      z-index: 10000;
    }
  }
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
      z-index: 20;
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
      width: 7.5rem;
      height: 100vh;
      filter: blur(15px);
    }
  }
}
.show-dialog {
  position: fixed;
  z-index: 10000;
  right: 0.5rem;
  bottom: 4.5rem;
  span {
    color: #333;
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
