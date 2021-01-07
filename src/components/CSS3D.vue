<template>
    <div id="photo-wrap">
        <!-- 舞台 -->
        <div class="container">
            <!-- 容器 -->
            <img :src="iconlist[3].pic" alt="" class="img">
            <img v-for="(item, i) in iconlist" :key="i" :src="item.pic" class="img" :class="item.txt" alt="item.txt">
            <!-- <img src="" alt="" class="img img01">
            <img src="" alt="" class="img img02">
            <img src="" alt="" class="img img03">
            <img src="" alt="" class="img img04">
            <img src="" alt="" class="img img05">
            <img src="" alt="" class="img img06">
            <img src="" alt="" class="img img07">
            <img src="" alt="" class="img img08">
            <img src="" alt="" class="img img09"> -->
            <!-- <div class="img"></div>
            <div class="img img01"></div>
            <div class="img img02"></div>
            <div class="img img03"></div>
            <div class="img img04"></div>
            <div class="img img05"></div>
            <div class="img img06"></div>
            <div class="img img07"></div>
            <div class="img img08"></div>
            <div class="img img09"></div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "CSS3D",
    data() {
        return {
            iconlist: [
                { pic: require('../assets/iconlist/1.png'), txt: "img01" },
                { pic: require('../assets/iconlist/2.png'), txt: "img02" },
                { pic: require('../assets/iconlist/3.png'), txt: "img03" },
                { pic: require('../assets/iconlist/4.jpg'), txt: "img04" },
                { pic: require('../assets/iconlist/5.jpg'), txt: "img05" },
                { pic: require('../assets/iconlist/6.jpg'), txt: "img06" },
                { pic: require('../assets/iconlist/7.jpg'), txt: "img07" },
                { pic: require('../assets/iconlist/8.jpg'), txt: "img08" },
                { pic: require('../assets/iconlist/4.jpg'), txt: "img09" }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@keyframes rotate-frame {
    0% {
        transform: rotateX(-20deg) rotateY(0deg);
    }
    10% {
        transform: rotateX(-20deg) rotateY(36deg);
    }
    20% {
        transform: rotateX(-20deg) rotateY(72deg);
    }
    30% {
        transform: rotateX(-20deg) rotateY(108deg);
    }
    40% {
        transform: rotateX(-20deg) rotateY(144deg);
    }
    50% {
        transform: rotateX(-20deg) rotateY(180deg);
    }
    60% {
        transform: rotateX(-20deg) rotateY(216deg);
    }
    70% {
        transform: rotateX(-20deg) rotateY(252deg);
    }
    80% {
        transform: rotateX(-20deg) rotateY(288deg);
    }
    90% {
        transform: rotateX(-20deg) rotateY(324deg);
    }
    100% {
        transform: rotateX(-20deg) rotateY(360deg);
    }
}
#photo-wrap {
    perspective: 400px;
    width: 375px;
    margin-top: -30px;
    margin-left: -15px;
}
.container {
    width: 400px;
    height: 250px;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-10deg);
    animation: rotate-frame 10s linear infinite;
}
.img {
    width: 100px;
    height: 59px;
    line-height: 59px;
    text-align: center;
    position: absolute;
    top: 80px;
    left: 150px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.9) inset;
    // -webkit-box-reflect: below 3px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
    //             40%, rgba(0, 0, 0, 0.5));
    // background: pink;
    // background: -moz-linear-gradient(top, pink, rgba(0, 0, 255, 0.5));
    // background: -webkit-gradient(
    //     linear,
    //     0 0,
    //     0 bottom,
    //     from(#ccccff),
    //     to(rgba(174, 221, 129, 0.5))
    // );
    // background: -o-linear-gradient(top, pink, rgba(0, 0, 255, 0.5));
    transform: rotateY(0deg);
}
.img01 {
    transform: rotateY(0deg) translateZ(150px);
}
.img02 {
    transform: rotateY(40deg) translateZ(150px);
}
.img03 {
    transform: rotateY(80deg) translateZ(150px);
}
.img04 {
    transform: rotateY(120deg) translateZ(150px);
}
.img05 {
    transform: rotateY(160deg) translateZ(150px);
}
.img06 {
    transform: rotateY(200deg) translateZ(150px);
}
.img07 {
    transform: rotateY(240deg) translateZ(150px);
}
.img08 {
    transform: rotateY(280deg) translateZ(150px);
}
.img09 {
    transform: rotateY(320deg) translateZ(150px);
}
</style>