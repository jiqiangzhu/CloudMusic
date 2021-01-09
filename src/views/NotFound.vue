<template>
    <div class="not-found">
        <span class="iconfont icon-arrowLeft" @click="$router.go(-1)"></span>
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h4 style="text-align: center;">请等待开发....</h4>
        <img src="../assets/iconlist/1.png" alt />
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false });
    }
}
</script>
<style lang="less" scoped>
.not-found {
    // position: fixed;
    // z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .icon-arrowLeft {
        font-size: 1rem;
        position: absolute;
        left: 0.1rem;
        height: 0.1rem;
    }
    .loading {
        // width: 150px;
        height: 15px;
        // margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 20px;
    }
    .loading span {
        display: inline-block;
        width: 15px;
        height: 100%;
        margin-right: 5px;
        border-radius: 50%;
        background: black;
        -webkit-animation: load 1.04s ease infinite;
    }
    .loading span:last-child {
        margin-right: 0px;
    }
    @-webkit-keyframes load {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .loading span:nth-child(1) {
        -webkit-animation-delay: 0.13s;
    }
    .loading span:nth-child(2) {
        -webkit-animation-delay: 0.26s;
    }
    .loading span:nth-child(3) {
        -webkit-animation-delay: 0.39s;
    }
    .loading span:nth-child(4) {
        -webkit-animation-delay: 0.52s;
    }
    .loading span:nth-child(5) {
        -webkit-animation-delay: 0.65s;
    }
    h4 {
        margin-bottom: 30px;
    }
    img {
        width: 50vw;
        height: auto;
        z-index: 1;
        border-radius: 30px;
    }
}
</style>