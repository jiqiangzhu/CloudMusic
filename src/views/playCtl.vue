<template>
    <div class="play-contro">
        <div class="left" @click="toPlayPageFn">
            <img :src="playlist[currentIndex].al.picUrl" :alt="playlist[currentIndex].name" />
            <span class="title van-ellipsis">{{ playlist[currentIndex].name }}</span>
            <!-- <span>-</span> -->
            <span class="author van-ellipsis">
                <span v-for="(item, i) in playlist[currentIndex].ar" :key="i">{{ item.name }}</span>
            </span>
        </div>
        <div class="right">
            <div class="circle-process">
                <van-circle
                    v-model:current-rate="tempRate"
                    :rate="rate"
                    :speed="100"
                    :text="text"
                    :color="'#f00'"
                    :stroke-width="80"
                    size="30px"
                    layer-color="#999"
                />

                <span v-if="paused" @click="changeStateFn" class="iconfont icon-icon-"></span>
                <span v-else @click="changeStateFn" class="iconfont icon-zanting"></span>
            </div>
            <span class="iconfont icon-liebiao" @click="showPopupFn"></span>
        </div>
        <van-popup v-model:show="showPopupFlag" closeable round position="bottom" duration="0.4">
            <PopupList />
        </van-popup>
        <audio
            @canplay="getDuration"
            @timeupdate="updateTime"
            ref="audio"
            :loop="loopFlag"
            @ended="playNext(currentIndex)"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[currentIndex].id}.mp3`"
        ></audio>
    </div>
</template>
<script>
import { Popup, Circle as VanCircle } from 'vant';
import { mapState, mapMutations } from 'vuex';
import PlayPage from '@/components/PlayPage.vue';
import PopupList from '@/components/PopupList.vue';
export default {
    name: "playCtl",
    data() {
        return {
            tempRate: 0,
            rate: 0,
            isShow: false,
            timer: 0,
            showPopupFlag: false,
            text: ""
        }
    },
    methods: {
        ...mapMutations(['setCurrentIndex']),
        getDuration() {//音乐总时长
            this.$store.commit("setDuration", this.$refs.audio.duration)
        },
        changeStateFn() {//切换播放暂停
            if (this.paused == true) {
                this.$refs.audio.play();
                this.updateTime();
            } else {
                this.$refs.audio.pause();
                clearInterval(this.$store.state.intervalId);
            }
            this.$store.commit("setPausedFlag", { paused: !this.paused });
        },
        updateTime() {//播放时更新当前播放时间
            if (this.paused) {
                return;
            }
            if (localStorage.duration != "NAN" && localStorage.duration && !this.duration) {
                this.duration = localStorage.duration;
            }
            // 设置当前播放时间
            this.$store.commit('setCurrentTime', this.$refs.audio.currentTime);
            let progress = this.currentTime / this.duration;
            // 设置进度条
            this.$store.commit("setProgress", progress);
        },
        toPlayPageFn() {//进入播放页
            console.log(this.$router);
            this.$router.push({ path: '/playPage' });
        },
        playNext(index1) {//上下首切换
            let index;
            if (this.loopFlag) {
                index = index1;
            } else {
                index = index1 + 1;
            }
            if (index >= this.playlist.length) {
                index = 0;
            }
            this.$store.commit("setCurrentIndex", index);
            this.$refs.audio.play();
        },
        showPopupFn() {//列表弹出层
            this.showPopupFlag = !this.showPopupFlag;
        },
        setProgress() {// 播放进度条
            let progress = this.$refs.audio.currentTime / localStorage.duration;
            this.$store.commit("setProgress", progress);
            console.log("进度条百分比率----------------", progress);
            progress = parseInt(progress * 100)
            this.tempRate = progress;
            this.rate = this.tempRate;
        }
    },
    components: {
        PlayPage, VanCircle,
        PopupList,
        "van-popup": Popup
    },
    computed: {
        ...mapState(['currentIndex', 'loopFlag', "playlist", "paused", "currentTime", 'duration', 'progress'])
    },
    watch: {
        progress(newV, oldV) {
            if (this.progress != 'NAN') {
                this.tempRate = parseInt(this.progress);
            } else {
                this.tempRate = 0;
            }
        }
    },
    beforeMount() {
        // 若本地存储中播放列表有值，那么取本地存储的播放列表
        if (localStorage.playlist) {
            let localPlayList = JSON.parse(localStorage.playlist);
            this.$store.commit("setPlayList", localPlayList)
        }

        // 设置索引
        if (localStorage.currentIndex != "NAN" && localStorage.currentIndex != "undefined" && localStorage.currentIndex) {
            console.log("localStorage.currentIndex-------------", localStorage.currentIndex);
            this.$store.commit("setCurrentIndex", localStorage.currentIndex)
        }

        // 获取歌词
        this.$store.dispatch('setLyric', this.playlist[this.currentIndex].id);
    },
    mounted() {
        // 本地存储播放信息 当前播放列表索引 当前歌曲播放时间点 进度
        if (localStorage.currentTime != "NAN" && localStorage.currentTime != "undefined" && localStorage.currentTime) {
            // 设置当前播放的时间
            this.$refs.audio.currentTime = localStorage.currentTime;
            this.$store.commit('setCurrentTime', this.$refs.audio.currentTime);
            console.log("------------当前播放时间---单位--秒----------", this.$refs.audio.currentTime);
            // 设置播放进度条
            this.setProgress();
        }
    },

    updated() {
        this.$store.dispatch('setLyric', this.playlist[this.currentIndex].id);
        if (!this.paused) {
            this.$refs.audio.play()
        } else {
            this.$refs.audio.pause()
        }
    }
}
</script>
<style lang="less" scoped>
.play-contro {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
    background: rgba(239, 239, 239, 0.9);
    .left {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 0.2rem;
        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.5rem;
        }
        .title {
            max-width: 2rem;
            margin: 0 0.2rem 0 0.2rem;
            font-size: 0.18rem;
        }
        .author {
            max-width: 2rem;
            font-size: 0.2rem;
            padding-left: 0.1rem;
            padding-top: 0.06rem;
        }
    }
    .right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 1.8rem;
        margin-right: 0.1rem;
        .circle-process {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            .iconfont {
                position: absolute;
                z-index: 100;
            }
        }
        .icon-liebiao {
            font-size: 0.4rem;
            margin: 0 0.25rem;
            position: absolute;
            right: 0.1rem;
        }
    }
}
</style>