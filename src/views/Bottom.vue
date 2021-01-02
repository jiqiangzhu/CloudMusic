<template>
    <div id="bottom">
        <playCtl :tracks="playlist" v-show="playControlFlag" /> 

        <BottomNav class="bottom-bar" v-show="navBarFlag" />
    </div>
</template>
<script>
import playCtl from '@/views/playCtl.vue'
import { mapState } from 'vuex';
import BottomNav from '@/components/BottomNav.vue'
export default {
    data() {
        return {
            
        }
    },
    beforeMount() {
        console.log(this.playlist);
    },
    computed: {
        ...mapState(['playControlFlag', 'navBarFlag', 'playlist'])
    },
    components: {
        playCtl,
        BottomNav
    }
}
</script>
<style lang="less" scoped>
#bottom {
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #efefef;
}
</style>
