<template>
    <div class="happy-mp3" @click.stop="playBgm">
        <!-- 弹出层 -->
        <audio
            ref="audio"
            src="../assets/music/happybirthday.mp3"
        ></audio>

    </div>
</template>
<script>

export default {
    name: "HappyBirthDay",
    data() {
        return {
            
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