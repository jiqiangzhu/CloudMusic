<template>
    <div class="game">
        <div class="hit-plane item" @click="$router.push({ path: '/hitPlane' })">
            <img src="../assets/plane/plane_bg.png" class="plane-bg" alt="飞机大战" />
            <span class="game-name">飞机大战</span>
        </div>
        <div class="push-box item" @click="$router.push({ path: '/pullBox' })">
            <img src="../assets/plane/pull_box.png" alt="推箱子" class="pull-box" />
            <span class="game-name">推箱子</span>
        </div>
        <img src="../assets/iconlist/4.jpg" alt=" " class="bg" />
    </div>
</template>
<script>
import HitPlane from '../components/HitPlane.vue';
export default {
    name: "Games",
    components: {
        HitPlane
    },
    beforeMount() {
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
        this.$store.commit("setNavArr", { index: 2 });
    },
    mounted() {
        
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.game {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 0.3rem 0.3rem;
    .item {
        flex: 1;
        height: 3rem;
        display: flex;
        margin: 0 0.1rem;
        position: relative;
        .plane-bg {
            width: 100%;
            height: auto;
            z-index: 10;
            border-radius: 0.5rem;
        }
        .pull-box {
            width: 100%;
            height: 100%;
            z-index: 10;
            border-radius: 0.5rem;
            
        }
        .game-name {
            position: absolute;
            right: 0.3rem;
            bottom: 0.1rem;
            font-weight: 900;
            font-size: 0.4rem;
            color: #10f39c;
            z-index: 10;
        }
    }

    .bg {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 7.5rem;
        height: 100vh;
        filter: blur(2px);
    }
}
</style>