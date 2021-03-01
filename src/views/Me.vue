<template>
    <section class="aui-scrollView">
        <div class="aui-head-read">
            <div class="aui-flex">
                <div class="aui-read-img">
                    <img :src="$store.state.user.userDetail.profile.avatarUrl" alt />
                </div>
                <div class="aui-flex-box">
                    <h2>limonkey8</h2>
                </div>
                <div class="aui-arrow aui-arrow-one">
                    <span @click="quitFn">退出登录</span>
                </div>
            </div>
        </div>
    </section>
    <!-- <Bottom :barFlag="true" :playFlag="false" /> -->
</template>
<script>
import Bottom from '@/views/Bottom.vue'
export default {
    name: "Me",
    components: {
        Bottom
    },
    methods: {
        quitFn() {
            console.log(JSON.parse(localStorage.userInfo));
            localStorage.userInfo = JSON.stringify({
                isLogin: false,
                userDetail: {},
                userAccount: {}
            });
            this.$store.commit("setUser", {
                isLogin: false,
                userDetail: {},
                userAccount: {}
            });
            this.$router.push('/login');
        }
    },
    mounted() {
        // console.log(this.$store.state.user.userDetail.profile.avatarUrl);
        this.$store.commit("setNavArr", { index: 3 });
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
    },
    updated() {
        this.$store.commit("setNavArr", { index: 3 });
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
    }
}
</script>
<style lang="less" scoped>
a {
    text-decoration: none;
    color: #08acee;
}

button {
    outline: 0;
}

img {
    border: 0;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
}

li {
    list-style: none;
}

a {
    color: #666;
}

.clearfix::after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}

.divHeight {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
}

.r-line {
    position: relative;
}

.r-line:after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #d9d9d9;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
}

.b-line {
    position: relative;
}

.b-line:after {
    content: "";
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.aui-arrow {
    position: relative;
    padding-right: 0.26rem;
}

.aui-arrow span {
    font-size: 0.26rem;
    color: #9b9b9b;
}

.aui-arrow:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #848484;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;
    border-radius: 1px;
}
.aui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 15px;
    position: relative;
}

.aui-flex-box {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;
}
/* 蹇呰甯冨眬鏍峰紡css */

.aui-flexView {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.aui-scrollView {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    padding-bottom: 58px;
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 102;
    background: #f6f6f6;
}
.aui-navBar-item {
    height: 44px;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.23rem;
    white-space: nowrap;
    overflow: hidden;
    color: #808080;
    position: relative;
}

.aui-navBar-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
    font-size: 0.3rem;
    font-weight: bold;
}

.aui-navBar-item:last-child {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aui-center {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44px;
    width: 50%;
    margin-left: 25%;
}

.aui-center-title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 0.31rem;
    color: #333;
}

.icon {
    width: 20px;
    height: 20px;
    display: block;
    border: none;
    float: left;
    background-size: 20px;
    background-repeat: no-repeat;
}

.icon-return {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=");
}
.m-slider {
    overflow-x: hidden;
    width: 100%;
    position: relative;
}

.slider-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    z-index: 1;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
}

.slider-item {
    width: 100%;
    height: 100%;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background: #f6f6f6;
}

.slider-item img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}

.slider-pagination {
    text-align: right;
    position: absolute;
    width: 100%;
    z-index: 2;
    right: 0;
    bottom: 10px;
    pointer-events: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.slider-pagination > .slider-pagination-item {
    margin: 0.08rem;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.4);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
    background-color: #fff;
    border-radius: 100%;
}
.aui-palace {
    padding: 0.16rem 0;
    position: relative;
    overflow: hidden;
}

.aui-palace-grid {
    position: relative;
    float: left;
    padding: 1px;
    width: 20%;
    box-sizing: border-box;
    margin: 5px 0;
}

.aui-palace-grid-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
}

.aui-palace-grid-icon img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}

.aui-palace-grid-text {
    display: block;
    text-align: center;
    color: #333;
    font-size: 0.28rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 0.06rem;
}

.aui-palace-grid-text h2 {
    font-size: 0.26rem;
    font-weight: normal;
    color: #666666;
}
.aui-head-read {
    background: -webkit-linear-gradient(
        left,
        #fd673d,
        #ff1e0f
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
        right,
        #fd673d,
        #ff1e0f
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
        right,
        #fd673d,
        #ff1e0f
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(
        to right,
        #fd673d,
        #ff1e0f
    ); /* 鏍囧噯鐨勮娉� */
    background-color: #fd673d;
    padding-bottom: 1rem;
    padding-top: 0.33rem;
}
.aui-read-img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 0.13rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    img {
        width: 50px;
        height: 50px;
    }
}

.aui-flex-box h2 {
    color: #fff;
    font-weight: normal;
}

.aui-arrow-one span {
    color: white;
}
.aui-arrow-one:after {
    border-color: white;
    margin-top: -3px;
}

.aui-white-box {
    width: 94%;
    background: white;
    border-radius: 0.1rem;
    margin: -0.8rem auto 0.26rem;
}
.aui-palace-one .aui-palace-grid {
    width: 33.333%;
}

.aui-palace-one h1 {
    color: #ff3d22;
    font-size: 0.33rem;
    -webkit-text-stroke: 1px #ff3b23;
    color: #ff3b23;
    letter-spacing: 1px;
    margin-bottom: 0.1rem;
}

.aui-palace-one h1 em {
    color: #7f7f7f;
    font-weight: normal;
    font-style: normal;
    font-size: 0.26rem;
    -webkit-text-stroke: 0 #7f7f7f;
    color: #7f7f7f;
}

.aui-white-box-clear {
    margin: 0 auto 0.26rem;
}

.aui-flex-box h3 {
    font-size: 0.3rem;
    font-weight: normal;
}

.aui-palace-two .aui-palace-grid {
    width: 25%;
}

.aui-palace-line {
    position: relative;
}
.aui-palace-line .aui-palace-grid:not(:nth-child(4n)):before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 70%;
    border-right: 1px solid #e6e6e6;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
}
</style>