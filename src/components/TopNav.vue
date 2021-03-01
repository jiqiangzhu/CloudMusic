<template>
    <div class="top-nav">
        <!-- <div class="top-left"> -->
            <span class="iconfont icon-liebiao1" @click="$router.push('/homeMunu')"></span>
        <!-- </div> -->
        <div class="top-center">
            <div class="search-box" @click="$router.push({path: '/search', query: {defaulttSearchKey: defaulttSearchKey}})">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" :placeholder="defaulttSearchKey">
            </div>
        </div>
        <!-- <div class="top-right"> -->
            <span class="iconfont icon-maikefeng-tianchong" @click="$router.push('/listen')"></span>
        <!-- </div> -->
    </div>
</template>
<script>
import { getDefaultSearchKey } from '../api'
export default {
    name: "TopNav",
    data() {
        return {
            defaulttSearchKey: ""
        }
    },
    async beforeMount() {
        let result = await getDefaultSearchKey();
        // console.log("-------------默认搜索关键词--------------", result);
        this.defaulttSearchKey = result.data.data.showKeyword;
    }
}
</script>
<style lang="less">
    .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        // z-index: 10;
        display: flex;
        width: 7.5rem;
        height: 1rem;
        justify-content: space-between;
        padding: 0 0.2rem;
        align-items: center;
        background-color:rgba(239,239,239);
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