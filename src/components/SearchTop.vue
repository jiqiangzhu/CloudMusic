<template>
    <div class="search">
        <div class="top">
            <span class="iconfont icon-arrowLeft" @click="$router.go(-1)"></span>
            <div class="input">
                <input type="text" v-model="keyword" placeholder="狼殿下最近很火哦" @keydown.enter="enterEvent">
            </div>
        </div>
        <div class="history" v-if="isShow">
            <span class="tag" >历史</span>
            <div class="left">
                <span class="h-item" @click="searchEvent(item)" v-for="(item, i) in historyList" :key="i">{{item}}</span>
            </div>
            <span class="iconfont icon-dustbin_icon" @click="clearEvent"></span>
        </div>
        <div class="l-content" v-if="contentShow">
            <!--  v-for="(item, i) in resultSongs" :key="i" -->
            <div class="list-item" v-for="(item, i) in resultSongs" :key="i">
                <div class="left">
                    <span class="index"></span>
                    <div class="content">
                        <span class="title">{{item.name}}-</span>
                        <span class="author" v-for="(prop, index) in item.ar" :key="index">
                            {{prop.name}}
                        </span>                            
                    </div>
                </div>
                <div class="right">
                    <span class="iconfont icon-iconset0481" @click="playSong($event, i)"></span>
                    <span class="iconfont icon-ziyuan"></span>
                </div>                
            </div>
            
        </div>
        <playCtl :tracks="resultSongs" v-if="contentShow" class="play-ctl" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import {getSearchResults} from '@/api/index'
import playCtl from '@/views/playCtl.vue'
export default {
    data() {
        return {
            isShow: false,
            keyword: '',
            contentShow: false,
            historyList: [],
            resultSongs: []
        }
    },
    computed: {
        
    },
    components: {
        playCtl
    },
    beforeMount() {
        if(localStorage.historyList != undefined && localStorage.historyList != "") {
            this.historyList = JSON.parse(localStorage.historyList)
            this.historyList = this.historyList.reverse()
            this.isShow = true
        } else {
            this.isShow = false
        }
    },

    methods: {
        async searchEvent(item) {
            let result = await getSearchResults(item)
            console.log(result);
            this.resultSongs = result.data.result.songs
            this.isShow = false
            this.contentShow = true
            console.log(this.resultSongs);
            this.$store.commit('setPlayList', this.resultSongs)
        },
        async enterEvent(event) {
            if(this.keyword != '') {
                console.log(this.historyList);
                this.historyList.push(this.keyword)
                this.historyList = Array.from(new Set(this.historyList))
                localStorage.historyList = JSON.stringify(this.historyList)
                this.historyList = this.historyList.reverse()
                this.isShow = false
                this.contentShow = true
            }
            // 获取关键词搜索结果集
            let result = await getSearchResults(this.keyword)
            this.resultSongs = result.data.result.songs
            this.$store.commit('setPlayList', this.resultSongs)
            // 清空搜索框
            this.keyword = ''
        },
        clearEvent() {
            this.isShow = false
            localStorage.clear()
            this.historyList = []
        },
        playSong(event, i) {
            console.log(this.resultSongs);
            this.$store.commit('setPlayList', this.resultSongs)
            this.$store.commit('setCurrentIndex', i)
        }
    }
}
</script>
<style lang="less" scoped>
.search {
    width: 7.5rem;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        width: 7.5rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0.2rem;
        margin-bottom: 0.3rem;
        .iconfont {
            width: 0.5rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.48rem;
            font-weight: 100;
        }
        .input {
            flex: 1;
            height: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            input {
                width: 100%;
                height: 0.8rem;
                font-size: 0.4rem;
                border: none;
                padding: 0 0.15rem;
                border-bottom: 0.02rem solid #333;
                outline: none;
            }
        }
    }
    .history {
        width: 7.1rem;
        height: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tag {
            width: 0.8rem;
            font-weight: 700;
            font-size: 0.35rem;
        }
        .left {
            width: 6rem;
            height: 0.5rem;
            overflow: scroll;
            display: flex;
            align-items: center;
            .h-item {
                margin: 0 0.15rem;
                padding: 0 0.2rem;
                height: 0.5rem;
                line-height: 0.5rem;
                background: rgb(230, 225, 225);
                border-radius: 0.25rem;
            }
        }
        .iconfont {
            width: 0.2rem;
            margin-left: 0.1rem;
            font-size: 0.28rem;
        }
    }
    .l-content {
        width: 7.5rem;
        margin-top: 0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1rem;
        .list-item {
            width: 7.1rem;
            height: 0.8rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                display: flex;
                align-items: center;
                .index {
                    width: 0.6rem;
                    color: #999;
                }
                .content {
                    display: flex;                    
                    .title {
                        font-size: 0.28rem;
                        font-weight: 500;
                        margin-bottom: 0.05rem;
                    }
                    .author {
                        margin-left: 0.2rem;
                    }
                    .name {
                        flex-direction: row;
                        color: #999;
                        font-size: 0.24rem;
                        span {
                            margin-right: 0.1rem;
                        }
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                .iconfont {
                    color: #999;
                    margin-left: 0.35rem;
                }
            }
        }
    }
    .play-ctl {
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>