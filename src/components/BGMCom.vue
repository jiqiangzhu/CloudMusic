<template>
    <div class="bgm">
        <img src="../assets/happy_birth.gif" @click.stop="playFn" class="birth" alt="生日快乐" />
        <HappyBirthDay class="bgmCom" />
    </div>
</template>
<script>
import HappyBirthDay from '@/views/HappyBirthDay.vue'
export default {
    components: {
        HappyBirthDay
    }
}
</script>
<style lang="less" scoped>
.bgm {
    width: 7.5rem;
    position: relative;
}
.birth {
    width: 7.5rem;
    height: auto;
    // margin-left: -0.5rem;
}
.bgmCom {
    width: 7.5rem;
    height: 6.2rem;
    margin: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10000;
}
</style>