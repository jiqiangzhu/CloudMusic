<template>
    <div id="bottom">
        <playCtl :tracks="playlist" v-if="playFlag" /> 
        <BottomNav v-if="barFlag" />       
    </div>
</template>
<script>
import playCtl from '@/components/playCtl.vue'
import BottomNav from '@/components/BottomNav.vue'
import {mapState} from 'vuex'
export default { 
    props: ['playlist', 'playFlag', 'barFlag'],
    components: {
        playCtl,
        BottomNav
    },
    setup() {

    }
}
</script>
<style lang="less" scoped>
#bottom {
    width: 7.5rem;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #fff;
    border-top: 0.01rem solid #eee;
}
</style>
