<template>
    <div class="playdz">
        <!-- <button @click="playClick" :class="{hide: isPlay}">点击播放</button> -->
        -->
        <!--class="video-js vjs-default-skin vjs-big-play-centered" -->
        <video
            ref="video"
            :preload="preload"
            :poster="videoImg"
            width="375"
            loop
            align="center"
            :controls="controls"
            :autoplay="autoplay"
            @click="playVideo"
        >
            <source :src="videoSrc" type="video/mp4" />
        </video>
        <img :src="closeIcon" @click="$router.go(-1)" alt="关闭" />
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'PlayDZ',
    methods: { 
        playVideo() {
            this.$refs.video.play()
        }
    },
    computed:{
        ...mapState(['videoList'])
    },
    data() {
        return {
            videoSrc: '',
            videoImg: '',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: false,
            width: '375', // 设置视频播放器的显示宽度（以像素为单位）
            height: '220', // 设置视频播放器的显示高度（以像素为单位）
            preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            autoplay: '',
            index: 0,
            closeIcon: require('../assets/duanzi/close.png')
        }
    },
    beforeMount() {  
        // this.$store.commit("setNav", {index: 1})
    },
    mounted() {
        this.index = this.$route.query.index;
        this.videoSrc = this.videoList[this.index].video;
        console.log(this.videoSrc);
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false })
    }

    // 自动播放属性,muted:静音播放
    // autoplay: 'muted',

}
</script>
<style lang="less" scoped>
.playdz {
    width: 100vw;
    height: 100vh;
    background: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
</style>