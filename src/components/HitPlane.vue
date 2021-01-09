<template>
    <div class="hit-plane">
        <div id="startBg" @click="startGame">
            <img id="start" src="../assets/plane/start.png" />
        </div>
        <div id="battleground"></div>
        <div id="data">
            <div id="data_top">
                <div id="Pause"></div>
                <div id="scores"></div>
                <div id="fScores">
                    <div id="hpBox">
                        <img id="myHP" src="../assets/plane/hp_0.png" />
                        <div id="myHpView">
                            <div id="nowHp"></div>
                        </div>
                    </div>
                    <img id="maxImg" src="../assets/plane/maxScores.png" />
                    <br />
                    <div id="maxScores"></div>
                </div>
            </div>
            <div id="data_middle"></div>
            <div id="boss">
                <div id="bossTit">BOSS</div>
                <div id="bossHp">
                    <div id="bossNowHp"></div>
                </div>
            </div>
        </div>
        <img id="bgRed" src="../assets/plane/boooo.png" />
        <div id="gameOver">
            <div id="overTit">
                <img id="overTitImg_0" src="../assets/plane/over_0.png" />
                <img id="overTitImg_1" src="../assets/plane/over_1.png" />
            </div>
            <div id="overImg"></div>
            <div id="restart">
                <img src="../assets/plane/restart.png" />
            </div>
        </div>
        <div id="hint">
            <input type="button" name id="consoleGame" value="单机模式" />
        </div>
    </div>
</template>
<script>
import '../static/cookie.js';
import '../static/js-me.js';
import { Toast } from 'vant'
export default {
    beforeMount() {
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false })
    },
    methods: {
        startGame() {
            Toast.fail('敬请期待');
            setTimeout(() => {
                this.$router.go(-1)
            }, 1000)
        }
    }
}
</script>
<style lang="less" scoped>
body {
    background: #222;
    font-family: "微软雅黑";
}
#start {
    width: 3rem;
    height: 1rem;
    position: fixed;
    left: calc(50% - 1.5rem);
    bottom: 2rem;
}
#battleground {
    width: 100vw;
    height: 100vh;
    background: url(../assets/plane/img_bg_level_1.jpg) repeat-y;
    background-size: 100% 100%;
    background-position: 0 0;
    margin: auto;
    background-position: 0 0;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
}
#startBg {
    width: 100vw;
    height: 100vh;
    background: url(../assets/plane/logo.jpg);
    background-size: 100% 100%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
}
#gameOver {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: none;
    overflow: hidden;
}
#data {
    width: 100vw;
    height: 100vh;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
#bgRed {
    width: 100vw;
    height: 100vh;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: none;
}
#start:hover {
    cursor: pointer;
}
/* #scores {
    float: right;
    margin: 30px;
}
#scores img {
    float: left;
    width: 20px;
    vertical-align: top;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
} */

#data_middle img {
    float: right;
    width: 45px;
    vertical-align: top;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
}
#Pause {
    width: 150px;
    height: 150px;
    background: url(../assets/plane/img_ui.png) no-repeat -584px -136px;
    float: right;
    position: absolute;
    display: none;
}
#data_top {
    width: 100vw;
    overflow: hidden;
}
</style>