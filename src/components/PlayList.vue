<template>
  <div id="play-list">
    <div class="before">
      <div class="left">
        <span class="iconfont icon-tx-wubianxing"></span>
        <span class="vipCount">含{{ 2 }}首VIP专享歌曲</span>
      </div>
      <span class="right">首开VIP仅5元></span>
    </div>
    <div class="list-top">
      <div class="left" @click="playAllFn">
        <span class="iconfont icon-bofang2"></span>
        <div class="all">
          <span class="txt">播放全部</span>
          <span class="num">({{ playlist.trackCount }})</span>
        </div>
      </div>
      <div class="right">
        <span
          class="iconfont icon-download"
          @click="$router.push('/download')"
        ></span>
        <span
          class="iconfont icon-plus-checkbox"
          @click="$router.push('/chooseAll')"
        ></span>
      </div>
    </div>
    <div class="list-content">
      <div
        class="list-item"
        @click="playSongFn(i)"
        v-for="(item, i) in playlist.tracks"
        :key="i"
      >
        <div class="left">
          <span class="index">{{ i + 1 }}</span>
          <div class="content">
            <span class="title van-ellipsis">{{ item.name }}</span>
            <span class="tag"></span>
            <div class="name van-ellipsis">
              <span v-for="(name, index) in item.ar" :key="index">{{
                name.name
              }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <span
            class="iconfont icon-iconset0481"
            @click="setCurrentIndex(i)"
          ></span>
          <span class="iconfont icon-ziyuan" @click="moreFn(i)"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
export default {
  name: "PlayList",
  props: ['playlist', "paused"],

  methods: {
    moreFn (i) {
      Toast("敬请期待")
    },
    ...mapMutations(['setCurrentIndex']),
    playAllFn () {
      this.$store.commit('setPlayList', this.playlist.tracks)
      // 设置播放index
      this.$store.commit('setCurrentIndex', 0)
      this.$store.commit("setPausedFlag", { paused: false })
    },
    playSongFn (i) {
      // 设置播放列表
      this.$store.commit('setPlayList', this.playlist.tracks)
      // 设置播放index
      this.$store.commit('setCurrentIndex', i)
      this.$store.commit("setPausedFlag", { paused: false })
    }
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
#play-list {
  width: 7.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;

  .before {
    width: 7.1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    margin-top: 0.1rem;
    border: 0.01rem solid #ddd;
    border-radius: 0.4rem;
    .left {
      .iconfont {
        color: orangered;
        margin-right: 0.1rem;
      }
      .vipCount {
        font-size: 0.24rem;
      }
    }
    .right {
      color: #999;
      font-size: 0.24rem;
    }
  }
  .list-top {
    width: 7.1rem;
    display: flex;
    margin-top: 0.4rem;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .iconfont {
        color: red;
        margin-right: 0.3rem;
      }
      .all {
        display: flex;
        align-items: center;
        .txt {
          font-weight: 900;
          margin-right: 0.15rem;
        }
        .num {
          color: #999;
          font-size: 0.2rem;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .iconfont {
        margin-left: 0.35rem;
        font-weight: 800;
      }
    }
  }
  .list-content {
    width: 7.5rem;
    margin-top: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    .list-item {
      width: 7.1rem;
      height: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .index {
          width: 0.6rem;
          color: #999;
        }
        .content {
          display: flex;
          flex-direction: column;

          .title {
            width: 4rem;
            font-size: 0.28rem;
            font-weight: 500;
            margin-bottom: 0.05rem;
          }
          .name {
            width: 5rem;
            flex-direction: row;
            color: #999;
            font-size: 0.24rem;
            span {
              margin-right: 0.1rem;
            }
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .iconfont {
          color: #999;
          margin-left: 0.35rem;
        }
      }
    }
  }
}
</style>