<template>
  <div id="icon-list">
    <div class="i-list">
      <div class="list-item" @click="$router.push('/recommand')">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili" />
          </svg>
        </div>
        <span class="txt">推荐</span>
      </div>
      <div class="list-item" @click="$router.push('/personalFM')">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-FM_weixuanze" />
          </svg>
        </div>
        <span class="txt">FM</span>
      </div>
      <div class="list-item" @click="$router.push('/goodPlaylist')">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan" />
          </svg>
        </div>
        <span class="txt">歌单</span>
      </div>
      <div class="list-item" @click="$router.push('/rank')">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaoqiankuozhan_paihang-128" />
          </svg>
        </div>
        <span class="txt">排行</span>
      </div>
      <div class="list-item" @click="$router.push('/live')">
        <div class="icon-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhibo" />
          </svg>
        </div>
        <span class="txt">直播</span>
      </div>
    </div>
    <!-- <div class="txt">静静，生日快乐呀</div> -->
    <div class="icon-bottom-line"></div>
  </div>
</template>
<script>


export default {
  name: "IconList",
  data () {
    return {
      iconlist: [
        /*{ pic: require('../assets/iconlist/icon1.png'), txt: "生" },
        { pic: require('../assets/iconlist/icon2.png'), txt: "日" },
        { pic: require('../assets/iconlist/icon3.png'), txt: "快" },
        { pic: require('../assets/iconlist/icon4.png'), txt: "乐" },
        { pic: require('../assets/iconlist/icon5.png'), txt: "呀" }*/
      ]
    }
  },
  components: {

  },
  async mounted () {


  }
}
</script>

<style lang="less">
#icon-list {
  height: 1.8rem;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .i-list {
    width: 7.5rem;
    display: flex;

    justify-content: space-around;
    .list-item {
      width: 1.2rem;
      height: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .icon-item {
        width: 1rem;
        height: 1rem;
        background: pink;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .birth {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 0.4rem;
        }
        .icon {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
      .txt {
        // position: absolute;
        // left: 0;
        // bottom: 0.1rem;
        // width: 7.5rem;
        color: #fff;
        text-align: center;
        // height: 0.8rem;
        // line-height: 0.8rem;
        font-size: 0.28rem;
        // color: #ff0000;

        // padding-top: 0.15rem;
      }
    }
  }

  .icon-bottom-line {
    width: 100%;
    height: 0.02rem;
    background: #ddd;
  }
}
</style>