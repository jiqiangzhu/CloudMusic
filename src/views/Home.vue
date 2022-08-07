<template>
  <van-skeleton title :row="8" :loading="loading">
    <div class="home">
      <TopNav class="top-nav" />
      <div class="scroll">
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
            <span class="tag">新歌首发</span>
          </template>
        </Swiper>
        <IconList class="iconlist" />
        <SetupMusicList class="musiclist" />
        <div class="bg"></div>
      </div>
    </div>
  </van-skeleton>
</template>

<script>
// @ is an alias to /src
import { Checkbox } from "vant";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/views/Bottom.vue";
import Swiper from "@/components/Swiper.vue";
import IconList from "@/components/IconList.vue";
import RecMusicList from "@/components/RecMusicList.vue";
import SetupMusicList from "@/components/SetupMusicList.vue";
import playCtl from "@/views/playCtl.vue";
import { getBanner } from "../api/index";
import { mapMutations, mapState } from "vuex";
import {
  Toast,
  Skeleton as VanSkeleton,
  PullRefresh as VanPullRefresh,
} from "vant";

export default {
  name: "Home",
  components: {
    TopNav,
    Swiper,
    Bottom,
    IconList,
    RecMusicList,
    SetupMusicList,
    playCtl,
    VanSkeleton,
    "van-checkbox": Checkbox,
    VanPullRefresh,
  },
  data() {
    return {
      birthFlag: true,
      loading: true,
      imgList: [],
    };
  },
  // activated() {
  //   if (this.refreshSearch) {
  //     // 若为true，则执行重置页面等相关操作
  //     this.fetchData();
  //   } else {
  //     this.reset(true);
  //   }
  // },

  computed: {
    ...mapState(["refreshSearch"]),
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    ...mapMutations(["setPlayFlag"]),
    swiperFn() {
      Toast("敬请期待...");
    },
  },
  async beforeMount() {
    let res = await getBanner(1);
    this.imgList = res.data.banners;
    this.$store.commit("setPlayFlag", {
      playControlFlag: true,
      navBarFlag: true,
    });
    this.$store.commit("setNavArr", { index: 0 });
  },
  mounted() {
    this.$store.commit("setPlayFlag", {
      playControlFlag: true,
      navBarFlag: true,
    });
    this.$store.commit("setNavArr", { index: 0 });
    this.loading = false;
  },
  updated() {
    this.$store.commit("setPlayFlag", {
      playControlFlag: true,
      navBarFlag: true,
    });
    this.$store.commit("setNavArr", { index: 0 });
  },
};
</script>
<style lang="less">
.home {
  .top-nav {
    z-index: 999;
  }
  .tag {
    position: absolute;
    bottom: 5px;
    right: 20px;
    background: red;
    padding: 0 5px;
    border-radius: 3px;
    color: #fff;
  }

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
    font-family: 微软雅黑;
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
      z-index: 0;
      width: 7.5rem;
      height: 100vh;
      background-image: radial-gradient(#5d4157, #a8caba);
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
