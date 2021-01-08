<template>
    <div class="play-contro">
        <div class="left" @click="toPlayPageFn">
            <!-- {{playlist[0].al.name}} -->
            <img :src="playlist[currentIndex].al.picUrl" :alt="playlist[currentIndex].name" />
            <span class="title">{{ playlist[currentIndex].name }}</span>
            <span>-</span>
            <!-- {{playlist[currentIndex].ar}} -->
            <span class="author">
                <span v-for="(item, i) in playlist[currentIndex].ar" :key="i">{{ item.name }}</span>
            </span>
        </div>
        <div class="right">
            <span v-if="paused" @click="changeStateFn" class="iconfont icon-icon-"></span>
            <span v-else @click="changeStateFn" class="iconfont icon-zanting"></span>
            <span class="iconfont icon-liebiao"></span>
        </div>
        <!-- <PlayPage
            :paused="paused"
            :play="changeStateFn"
            @back="isShow = !isShow"
            :musicDetail="playlist[currentIndex]"
            v-show="isShow"
        /> -->
        <audio
            ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[currentIndex].id}.mp3`"
        ></audio>
    </div>
</template>
<script>
import { onMounted, reactive, inject } from 'vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import PlayPage from '@/components/PlayPage.vue'

export default {
    props: ["tracks"],
    data() {
        return {
            // paused: true,
            isShow: false
        }
    },
    methods: {
        changeStateFn() {
            if (this.paused == true) {
                this.$refs.audio.play()
                this.updateTime()
            } else {
                this.$refs.audio.pause()
                clearInterval(this.$store.state.intervalId)
            }
            this.$store.commit("setPausedFlag", {paused: !this.paused})
        },
        updateTime() {
            this.$store.state.intervalId = setInterval(() => {
                this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
                // console.log(this.$refs.audio.currentTime);
            }, 1000)
        },
        toPlayPageFn() {
            // this.isShow = !this.isShow
            console.log(this.playlist);
            this.$router.push({path: '/playPage'});
        }
    },
    components: {
        PlayPage
    },
    computed: {
        ...mapState(['currentIndex', "playlist", "paused"])
    },
    // watch: {
    //     paused1(newValue, oldValue) {
    //         this.paused = this.paused1
    //         if(newValue == false) {
    //             this.$refs.audio.play()
    //         } else {
    //             this.$refs.audio.pause()
    //         }
    //     }
    // },
    mounted() {
        console.log(this.playlist[this.currentIndex]);
    },
    updated() {
        this.$store.dispatch('setLyric', this.playlist[this.currentIndex].id)
        if(!this.paused) {
            this.$refs.audio.play()
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
    background: #efefef;
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
        width: 1.8rem;
        margin-right: 0.1rem;
        .iconfont {
            font-size: 0.4rem;
            margin: 0 0.25rem;
        }
    }
}
</style>