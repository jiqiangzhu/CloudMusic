<template>
  <div class="happy-mp3" @click.stop="playBgm">
    <!-- 弹出层 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=5270588.mp3`"
    ></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "HappyBirthDay",
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {
    playBgm () {
      this.$refs.audio.play()
    }
  }
}
</script>