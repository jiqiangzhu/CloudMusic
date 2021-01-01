<template>
    <div class="bottom-nav">
        <div class="nav-item active" >
            <span class="iconfont icon-icon--" @click="$router.push('/')"></span>
            <span class="see">发现</span>
        </div>
        <div class="nav-item">
            <span class="iconfont icon-_gongguanchuanbo"></span>
            <span class="boke">播客</span>
        </div>
        <div class="nav-item">
            <span class="iconfont icon-yinyue" @click="$router.push('/me')"></span>
            <span class="my">我的</span>
        </div>
        <div class="nav-item">
            <span class="iconfont icon-maikefeng"></span>
            <span class="kge">K歌</span>
        </div>
        <div class="nav-item">
            <span class="iconfont icon-daohanglan-05"></span>
            <span class="yuncun">云村</span>
        </div>
    </div>
  

</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    
}
</script>
<style lang="less" scoped>
.bottom-nav {
    height: 1rem;
    width: 7.5rem;
    display: flex;

    .nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .iconfont {
            font-size: 0.32rem;
        }
        span:nth-child(2) {
            font-size: 0.12rem;
        }
    }
    .active {
        color: #ff5000;
    }
}
</style>
