<template>
    <div class="playdz" @click="changeState">
        <video
            ref="video"
            :preload="preload"
            :poster="videoImg"
            width="375"
            loop
            align="center"
            autoplay
            :controls="false"
        >
            <source :src="videoList[index].video" type="video/mp4" />
        </video>
        <img :src="closeIcon" @click="$router.go(-1)" alt="关闭" />
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'PlayDZ',
    methods: {
        changeState() {
            if (this.$refs.video.paused) {
                this.$refs.video.play()
            } else {
                this.$refs.video.pause()
            }
        }
    },
    computed: {
        ...mapState(['videoList'])
    },
    data() {
        return {
            videoSrc: '',
            videoImg: '',
            width: '375', // 设置视频播放器的显示宽度（以像素为单位）
            height: '220', // 设置视频播放器的显示高度（以像素为单位）
            preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            index: 0,
            closeIcon: require('../assets/duanzi/close.png')
        }
    },
    beforeMount() {

    },
    mounted() {
        this.index = this.$route.query.index;
        console.log(this.videoList);
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false });

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
    position: relative;
    img {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
</style>