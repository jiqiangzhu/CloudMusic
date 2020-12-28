<template>
    <div class="play-contro">
        <div class="left" @click="isShow=!isShow">
            <img :src="playlist[currentIndex].al.picUrl" :alt="playlist[currentIndex].al.name">
            <span class="title">{{playlist[currentIndex].name}}</span>
            <span class="author">-{{"name"}}</span>
        </div>
        <div class="right">
            <span v-if="paused" @click="changeStateFn" class="iconfont icon-icon-"></span>
            <span v-else @click="changeStateFn" class="iconfont icon-zanting"></span>
            <span class="iconfont icon-liebiao"></span>
        </div>
        <PlayPage :paused="paused" :play="changeStateFn" @back="isShow=!isShow" :musicDetail="playlist[currentIndex]" v-show="isShow"/>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[currentIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import { onMounted, reactive, inject } from 'vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import PlayPage from '@/components/PlayPage.vue'

export default {
    props: ["tracks"],
    data() {
        
        return {
            paused: true,
            isShow: false
        }
    },
    components: {
        PlayPage
    },
    computed: {
        ...mapState(['currentIndex', "playlist"])
    },
    watch: {
        
    },
    updated() {
        this.$store.dispatch('setLyric', this.playlist[this.currentIndex].id)
        // console.log([this.$refs.audio][0].currentTime);
        
    },
    mounted() {
        // this.$store.dispatch('setLyric', this.playlist[this.currentIndex].id)
    },
    beforeUnmount() {
        clearInterval(this.$store.state.intervalId)
    },
    methods: {
        changeStateFn() {
            if(this.paused == true) {  
                this.$refs.audio.play()
                this.updateTime()
            } else {
                this.$refs.audio.pause()
                clearInterval(this.$store.state.intervalId)
            }
            this.paused = !this.paused
        },
        updateTime() {
            this.$store.state.intervalId = setInterval(()=>{
                this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
                // console.log(this.$refs.audio.currentTime);
            }, 1000)            
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
    background: #fff;
    // position: fixed;
    // left: 0;
    // bottom: 1rem;
    .left {
        display: flex;
        align-items: center;
        padding: 0 0.2rem;
        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.5rem;
        }
        .title {
            margin: 0 0.2rem 0 0.2rem;
            font-size: 0.18rem;
        }
        .author {
            font-size: 0.2rem;
            color: #999;
            padding-top: 0.06rem;
        }
    }
    .right {
        display: flex;
        align-items: center;
        .iconfont {
            font-size: 0.4rem;
            margin: 0 0.25rem;
        }
    }
}
</style>