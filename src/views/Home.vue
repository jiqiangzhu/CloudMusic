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
      <img src="../assets/iconlist/3.png" alt=" " class="bg" />
    </div>
    <div class="dialog" v-show="birthFlag">
      <img src="../assets/duanzi/close1.png" @click.stop="closeFn" class="close" alt="关闭" />
      <BGMCom class="birth" />
      
      <!-- <div class="show-dialog-flag" @click="neverShow" >
        <input type="checkbox" :checked="showDialogFlag" id="showDialogFlag">
        以后不再显示
      </div> -->
    </div>
    <van-checkbox v-show="birthFlag" :icon-size="25" :shape="'square'" class="show-dialog" checked-color="#ee0a24" v-model="showDialogFlag">不再显示</van-checkbox>
  </div>
</template>

<script>
// @ is an alias to /src
import { Checkbox, CheckboxGroup } from 'vant';
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/views/Bottom.vue'
import Swiper from '@/components/Swiper.vue'
import IconList from '@/components/IconList.vue'
import RecMusicList from '@/components/RecMusicList.vue'
import SetupMusicList from '@/components/SetupMusicList.vue';
import CSS3D from '@/components/CSS3D.vue';
import playCtl from '@/views/playCtl.vue'
import { getBanner } from '../api/index'
import { mapMutations, mapState } from 'vuex';
import { Toast, Overlay } from 'vant';
import BGMCom from '@/components/BGMCom.vue'

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
    CSS3D,
    BGMCom, "van-checkbox": Checkbox
  },
  data() {
    return {
      birthFlag: true,
      imgList: [
        { pic: require('../assets/img/swiper1.jpg') },
        { pic: require('../assets/img/swiper2.jpg') },
        { pic: require('../assets/img/swiper3.jpg') }
      ],
      showDialogFlag: false
    }
  },
  computed: {
    // ...mapState(['birthFlag']),
  },
  methods: {
    ...mapMutations(['setPlayFlag']),
    neverShow() {
      this.showDialogFlag = !this.showDialogFlag
    },
    swiperFn() {
      Toast("敬请期待...");
    },
    closeFn() {
      console.log("======>>>>>>>this.showDialogFlag>>>>>>=====", this.showDialogFlag);
      if(this.showDialogFlag) {
        localStorage.showDialogFlag = this.showDialogFlag;
      }
      this.birthFlag = !this.birthFlag;
      // this.birthFlag = false;
      // this.$store.commit("setBirthFlag");
    }

  },
  async beforeMount() {
    if(localStorage.showDialogFlag) {
      this.birthFlag = false;
    }
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
    this.$store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: true });
    this.$store.commit("setNavArr", { index: 0 });
    var clickNum = 0;
    mui.back = function(event) {
      clickNum++;
      if (clickNum > 1) {
        plus.runtime.quit();
      } else {
        mui.toast("再按一次退出应用");
      }
      setTimeout(function() {
        clickNum = 0
      }, 2000);
      return false;
    }

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
    // .birth {
    //   width: 7.5rem;
    //   height: auto;
    // }
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
