<template>
    <div id="music-list">
        <div class="music-top">
            <span class="title">推荐歌单</span>
            <span class="more">更多></span>
        </div>
        <div class="music-content">
            <router-link :to="{path: '/playlistDetail', query: {id: item.id}}" class="music-item" v-for="(item, i) in state.musicList" :key="i">
                <div class="rel-item">
                    <span class="iconfont icon-icon-"></span>
                    <span class="count">{{changeVlue(item.playCount)}}</span>
                </div>
                <img :src="item.picUrl" :alt="item.name">
                <span class="brief">{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import {getRecMusicList} from '@/api/index'
import {onMounted, reactive} from 'vue'
import {mapMutations} from 'vuex'
export default {
    // methods: {
    //     ...mapMutations(['setIsShow']),
    //     changeShowFn(arr) {
    //         this.$store.commit('setIsShow', arr[0], arr[1])
    //     }
    // },
    setup() {
        let state = reactive({musiclist: []})
        function changeVlue(num) {
            let res = 0
            if(num >= 100000000) {
                res = (num / 100000000).toFixed(1) + '亿'
            } else if(num >= 10000) {
                res = (num /10000).toFixed(0) + '万'
            }
            return res
        }
        
        onMounted(async()=>{
            let result = await getRecMusicList(10)
            state.musicList = result.data.result
        }) 
        return {
            state,
            changeVlue
        }
    }
}
</script>
<style lang="less" scoped>
#music-list {
    width: 7.3rem;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    background: #fff;
    .music-top {
        width: 100%;
        height: 0.66rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            padding-left: 0.25rem;
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more {
            width: 1.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            margin-right: 0.2rem;
            font-size: 0.25rem;
            border: 0.01rem solid #ddd;
            border-radius: 0.3rem;
        }
    }
    .music-content {
        width: 100%;
        height: 4.8rem;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 0 0.2rem;
        .music-item {
            width: 2.3rem;
            height: 2.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            img {
                width: 1.8rem;
                border-radius: 0.2rem;
                height: auto;
            }
            .rel-item {
                position: absolute;
                right: 0.2rem;
                top: 0.1rem;
                padding: 0 0.05rem;
                font-size: 0.2rem;
                color: #fff;
                background: rgba(58, 57, 57, 0.2);
                border-radius: 0.4rem;
            }
            
            .brief {
                width: 90%;
                height: 0.5rem;
                line-height: 0.5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.2rem;
            }
        }
    }
}
</style>