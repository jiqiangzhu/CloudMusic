<template>
    <div class="top-nav">
        <!-- <div class="top-left"> -->
            <span class="iconfont icon-liebiao1"></span>
        <!-- </div> -->
        <div class="top-center">
            <div class="search-box" @click="$router.push({path: '/search'})">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" placeholder="大家都在搜 狼殿下">
            </div>
        </div>
        <!-- <div class="top-right"> -->
            <span class="iconfont icon-maikefeng-tianchong"></span>
        <!-- </div> -->
    </div>
</template>
<style lang="less">
    .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        width: 7.5rem;
        height: 1rem;
        justify-content: space-between;
        padding: 0 0.2rem;
        align-items: center;
        background-color:#efefef;
        .iconfont {
            width: 0.5rem;
            height: 0.5rem;
        }
        .icon-maikefeng-tianchong {
            font-weight: 900;
        }
        .top-center {
            width: 5.8rem;
            height: 0.6rem;
            display: flex;
            align-items: center;
            .search-box {
                width: 5.8rem;
                height: 0.6rem;
                border: 1px #fff solid;
                border-radius: 0.3rem;
                display: flex;
                align-items: center;
                padding: 0 0.15rem;
                background: #fff;
                span {
                    width: 0.35rem;
                    height: 0.35rem;
                    background: transparent;
                    padding-right: 0.1rem;
                }
                input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    outline: none;
                }
            }
        }
    }
</style>