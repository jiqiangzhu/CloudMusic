<template>
    <div class="game">
        <div class="hit-plane" @click="$router.push({path: '/hitPlane'})">飞机大战</div>
        <div class="push-box">推箱子</div>
    </div>
</template>
<script>
import HitPlane from '../components/HitPlane.vue';
export default {
    name: "Game",
    components: {
        HitPlane
    },
    beforeMount() {
        this.$store.commit('setPlayFlag', {playControlFlag: false, navBarFlag: true})
    },
    data() {
        return {

        }
    }
}
</script>