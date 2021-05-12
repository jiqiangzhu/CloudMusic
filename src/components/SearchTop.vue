<template>
    <div class="search">
        <div class="top">
            <span class="iconfont icon-arrowLeft" @click="$router.go(-1)"></span>
            <div class="input">
                <input
                    @focus="isShow = true"
                    type="text"
                    v-model="keyword"
                    :placeholder="defaulttSearchKey"
                    @keydown="inputEvent($event)"
                    @keydown.enter="enterEvent"
                />
            </div>
        </div>
        <div class="history" v-if="isShow">
            <span class="tag">历史</span>
            <div class="h-content">
                <div class="content">
                    <p
                        class="h-item"
                        @click="searchEvent(item)"
                        v-for="(item, i) in historyList"
                        :key="i"
                    >{{ item }}</p>
                </div>
            </div>
            <span class="iconfont icon-dustbin_icon" @click="clearEvent"></span>
        </div>
        <div class="l-content" v-if="!isShow">
            <div
                class="list-item"
                v-for="(item, i) in resultSongs"
                @click="playSong($event, i)"
                :key="i"
            >
                <div class="left">
                    <div class="content van-ellipsis">
                        <span class="title">{{ item.name }}-</span>
                        <span
                            class="author"
                            v-for="(prop, index) in item.ar"
                            :key="index"
                        >{{ prop.name }}</span>
                    </div>
                </div>
                <div class="right">
                    <span class="iconfont icon-iconset0481" @click="playSong($event, i)"></span>
                    <span class="iconfont icon-ziyuan"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { getSearchResults } from '@/api/index';
import playCtl from '@/views/playCtl.vue';
import { getDefaultSearchKey } from '../api';
import { Toast } from 'vant';
export default {
    name: "SearchTop",
    data() {
        return {
            isShow: false,
            keyword: '',
            contentShow: false,
            historyList: [],
            resultSongs: [],
            defaulttSearchKey: ""
        }
    },
    computed: {
        Toast
    },
    components: {
        playCtl
    },
    async beforeMount() {
        if (localStorage.historyList != undefined && localStorage.historyList != "") {
            this.historyList = JSON.parse(localStorage.historyList)
            this.isShow = true
        } else {
            this.isShow = false
        }
        this.defaulttSearchKey = this.$route.query.defaulttSearchKey;
    },

    methods: {
        async searchEvent(item) {
            Toast.loading("正在加载中，请稍候...");
            let result = await getSearchResults(item)
            console.log(result);
            this.resultSongs = result.data.result.songs
            this.isShow = false;
            this.contentShow = true;
            Toast.clear();
            Toast.success("加载成功！");
            console.log(this.resultSongs);
        },
        inputEvent(e) {
            if (e.keyCode != 13) {
                this.isShow = true;
            }
        },
        async enterEvent(event) {
            Toast.loading("正在加载中，请稍候...");
            if (this.keyword != '') {
                this.historyList = this.historyList.reverse();
                this.historyList.push(this.keyword);
                this.historyList = this.historyList.reverse();
                this.historyList = Array.from(new Set(this.historyList));
                localStorage.historyList = JSON.stringify(this.historyList);
                this.isShow = false;
                this.contentShow = true;
            } else {
                console.log(this.$route.query.defaulttSearchKey);
                this.keyword = this.$route.query.defaulttSearchKey;

                this.historyList = this.historyList.reverse();
                this.historyList.push(this.keyword);
                this.historyList = this.historyList.reverse();
                this.historyList = Array.from(new Set(this.historyList));
                localStorage.historyList = JSON.stringify(this.historyList);
                this.isShow = false;
                this.contentShow = true;
            }
            // 获取关键词搜索结果集
            let result = await getSearchResults(this.keyword);
            this.resultSongs = result.data.result.songs;
            Toast.clear();
            Toast.success("加载成功！");
        },
        clearEvent() {
            this.isShow = false;
            localStorage.removeItem("historyList")
            this.historyList = [];
        },
        playSong(event, i) {
            console.log(this.resultSongs);
            this.$store.commit('setPlayList', this.resultSongs);
            this.$store.commit('setCurrentIndex', i);
            this.$store.commit("setPausedFlag", { paused: false });
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
        position: relative;
        .tag {
            width: 0.8rem;
            font-weight: 700;
            font-size: 0.35rem;
        }
        .h-content {
            width: 6rem;
            height: 0.6rem;
            line-height: 0.6rem;
            overflow-x: scroll;
            .content {
                display: flex;
                flex-wrap: nowrap;
            }
            .h-item {
                margin: 0.02rem 0.1rem;
                padding: 0rem 0.1rem;
                border-radius: 0.15rem;
                font-size: 0.12rem;
                background: #efefef;
                flex-shrink: 0;
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
            margin-bottom: 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .left {
                width: 6rem;
                display: flex;
                align-items: center;
                padding-left: 0.4rem;
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
                position: absolute;
                top: 0.22rem;
                right: 0;
                width: 1.3rem;
                display: flex;
                align-items: center;
                .iconfont {
                    color: #999;
                    margin-left: 0.35rem;
                }
            }
        }
    }
}
</style>