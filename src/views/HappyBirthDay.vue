<template>
    <div class="happy-mp3" @click.stop="playBgm">
        <!-- 弹出层 -->
        <audio ref="audio" :src="mp3Path"></audio>
    </div>
</template>
<script>
import happyMp3Path from '@/assets/music/happybirthday.mp3';

export default {
    name: "HappyBirthDay",
    data() {
        return {
            mp3Path: happyMp3Path
        }
    },
    watch: {

    },
    methods: {
        playBgm() {
            this.$refs.audio.play()
        }
    }
}
</script>