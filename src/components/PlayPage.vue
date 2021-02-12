<template>
    <div class="play-page">
        <div class="bg" :style="{ backgroundImage: `url(${playlist[currentIndex].al.picUrl})` }"></div>
        <div class="p-top">
            <span class="iconfont icon-jiantou8" @click="playPageBackFn"></span>
            <div class="name">
                <!-- <marquee behavior="scroll" direction="left">{{musicDetail.al.name}}</marquee> -->
                <span class="brief">{{ playlist[currentIndex].name }}</span>
                <span
                    class="detail"
                >{{ playlist[currentIndex].al.name }}-{{ playlist[currentIndex].ar[0].name }}</span>
            </div>
            <span class="iconfont icon-fenxiang" @click="shareFn"></span>
        </div>
        <div class="content" v-show="!isLyric" @click="isLyric = !isLyric">
            <img src="@/assets/img/needle-ip6.png" alt :class="{ active: !paused }" class="handler" />
            <img src="@/assets/img/disc_black.png" alt class="disc" />
            <img :src="playlist[currentIndex].al.picUrl" alt class="play-img" />
        </div>
        <div class="lyric" v-show="isLyric" @click="isLyric = !isLyric" ref="playLrc">
            <div class="scroll-lrc">
                <p
                    :class="{ active: getStateFn(item.time, item.pre) }"
                    v-for="(item, index) in $store.getters.listLyric"
                    :key="index"
                >{{ item.content }}</p>
            </div>
        </div>
        <div class="footer">
            <div class="f-top">
                <span class="iconfont icon-xihuan" @click="likesFn"></span>
                <span class="iconfont icon-download" @click="downloadFn"></span>
                <span class="iconfont icon-ziyuan43" @click="shenmeFn"></span>
                <span class="iconfont icon-pinglun" @click="seeCommontFn"></span>
                <span class="iconfont icon-ziyuan" @click="seeMoreFn"></span>
            </div>
            <div class="jindu">
                <div class="process" :style="{ width: tempRate }"></div>
            </div>
            <div class="f-bottom">
                <span class="iconfont icon-xunhuan" v-if="!loopFlag" @click="changeLoopState"></span>
                <span class="iconfont icon-icon-1" v-else @click="changeLoopState"></span>
                <span class="iconfont icon-48shangyishou" @click="goPlay(-1)"></span>
                <span v-if="paused" @click="play" class="iconfont icon-iconset0481"></span>
                <span v-else @click="play" class="iconfont icon-zanting"></span>
                <span class="iconfont icon-xiayigexiayishou" @click="goPlay(1)"></span>
                <span class="iconfont icon-liebiao" @click="showPopupFn"></span>
            </div>
        </div>
        <van-popup v-model:show="showPopupFlag" closeable round position="bottom" duration="0.4">
            <PopupList />
        </van-popup>
    </div>
</template>
<script>
import { getLyric } from '@/api/index';
import PopupList from '@/components/PopupList.vue';
import { Popup } from 'vant';
import { mapGetters, mapMutations, mapState } from 'vuex';
import { Toast } from 'vant';
export default {
    components: {
        Toast,
        PopupList,
        "van-popup": Popup
    },
    data() {
        return {
            tempRate: 0,
            isLyric: false,
            top: 1,
            showPopupFlag: false
        }
    },
    computed: {
        ...mapState(['lyric', 'currentTime', 'playlist', 'loopFlag', 'currentIndex', 'paused', 'progress']),
        ...mapGetters(['listLyric'])
    },
    methods: {
        ...mapMutations(['setCurrentTime']),
        getStateFn(nowTime, preTime) {
            return this.currentTime * 1000 < nowTime && this.currentTime * 1000 > preTime
        },
        likesFn() {
            Toast.fail('开发中，敬请期待');
        },
        downloadFn() {
            Toast.fail('开发中，敬请期待');
        },
        shenmeFn() {
            Toast.fail('开发中，敬请期待');
        },
        seeCommontFn() {
            Toast.fail('开发中，敬请期待');
        },
        seeMoreFn() {
            Toast.fail('开发中，敬请期待');
        },
        shareFn() {
            Toast.fail('开发中，敬请期待');
        },
        goPlay(num) {
            if (this.playlist.length == 1) {
                Toast("列表中没有更多歌曲了")
            }
            let index = this.currentIndex + num;
            if (index < 0) {
                index = this.playlist.length - 1;
            } else if (index > this.playlist.length - 1) {
                index = 0;
            }
            this.$store.commit('setCurrentIndex', index);

        },
        playPageBackFn() {
            this.$router.go(-1);
        },
        play() {
            this.$store.commit("setPausedFlag", { paused: !this.paused });
        },
        changeLoopState() {
            if (this.loopFlag) {
                Toast("列表循环");
            } else {
                Toast("单曲循环");
            }
            this.$store.commit("setLoopFlag");
        },
        showPopupFn() {
            this.showPopupFlag = !this.showPopupFlag;
        }
    },
    mounted() {
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false });
        console.log("播放页面当前进度-----------", this.progress);
        this.tempRate = this.progress + "%";
        this.$store.commit("setLocalLoopFlag");
    },
    watch: {
        currentTime: function(value) {
            let activeP = document.querySelector('p.active');
            if (activeP == null) {
                return
            }
            this.$refs.playLrc.scrollTop = activeP.offsetTop;

        },
        progress(newV, oldV) {
            if (this.progress != "NAN" && this.progress) {
                this.tempRate = this.progress + "%";
            }
        }
    }
}
</script>
<style lang="less" scoped>
.play-page {
    width: 7.5rem;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #999;
    z-index: 100;
    .bg {
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-size: auto 100%;
        // background-image: url("http://p3.music.126.net/W61Q1gkQAewX5zFlq3i-0Q==/109951165181285684.jpg");
        filter: blur(80px);
    }
    .p-top {
        width: 7.1rem;
        height: 0.8rem;
        margin: 0.8rem auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0.2rem;
        z-index: 1000;
        color: #fff;
        .iconfont {
            width: 0.6rem;
            margin: 0 0.2rem;
            font-size: 0.5rem;
        }
        .name {
            width: 4rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .detail {
                font-size: 0.2rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .lyric {
        width: 7.5rem;
        height: 7.1rem;
        position: relative;
        left: 0;
        top: 3rem;
        z-index: 10000;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        overflow: scroll;
        padding: 0.2rem 0 0.4rem;
        .scroll-lrc {
            width: 7.1rem;
            position: absolute;
            left: calc(50% - 3.55rem);
            top: 1.5rem;
            overflow: hidden;
            p {
                width: 7.5rem;
                text-align: center;
                color: #fff;
            }
            p.active {
                color: #ff0000;
            }
        }
    }
    .content {
        width: 7.5rem;
        height: 7.5rem;
        position: absolute;
        top: 2rem;
        left: 0;
        z-index: 1000;
        .handler {
            width: 2rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            top: 0.2rem;
            z-index: 10000;
            transition: all 1s;
            transform-origin: 0 top;
            transform: rotate(-30deg);
        }
        .handler.active {
            width: 2rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            top: 0.2rem;
            z-index: 10000;
            transition: all 1s;
            transform-origin: 0 top;
            transform: rotate(0deg);
        }
        .disc {
            width: 5rem;
            height: auto;
            position: absolute;
            left: calc(50% - 2.5rem);
            top: 1.55rem;
        }
        .play-img {
            width: 3.1rem;
            height: auto;
            border-radius: 2rem;
            position: absolute;
            left: calc(50% - 1.55rem);
            top: 2.5rem;
            // transition: all 5s;
            // transform: rotate(180deg);
        }
        .play-img.active {
            width: 3.1rem;
            height: auto;
            border-radius: 2rem;
            position: absolute;
            left: calc(50% - 1.55rem);
            top: 2.5rem;
            transition: all 10s;
            transform: rotate(5deg);
        }
    }
    .footer {
        width: 7.5rem;
        position: absolute;
        left: 0;
        bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .f-top {
            width: 7.1rem;
            height: 0.5rem;
            display: flex;
            justify-content: space-evenly;
            .iconfont {
                flex: 1;
                text-align: center;
                font-size: 0.48rem;
                color: #fff;
            }
        }
        .jindu {
            width: 5rem;
            height: 0.02rem;
            margin-top: 0.5rem;
            background: #ddd;
            .process {
                background: #ff0000;
                height: 0.02rem;
            }
        }
        .f-bottom {
            width: 7.1rem;
            height: 0.8rem;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 0.4rem;
            .iconfont {
                height: 0.6rem;
                flex: 1;
                text-align: center;
                font-size: 0.48rem;
                color: #fff;
            }
            .icon-iconset0481,
            .icon-zanting {
                font-size: 0.7rem;
            }
        }
    }
}
</style>