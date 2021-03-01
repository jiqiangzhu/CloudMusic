<template>
    <div class="detail-top">
        <img :src="playlist.coverImgUrl" :alt="playlist.name" class="bg" />
        <div class="topBar">
            <div class="top-left">
                <span class="iconfont icon-arrowLeft" @click="$router.go(-1)"></span>
                <span>歌单</span>
            </div>
            <div class="top-right">
                <span class="iconfont icon-sousuo"></span>
                <span class="iconfont icon-ziyuan"></span>
            </div>
        </div>
        <div class="top-content">
            <div class="avatar">
                <img :src="playlist.coverImgUrl" alt />
                <div class="play-count">
                    <span class="iconfont icon-icon-"></span>
                    <span class="count">{{ changeValue(playlist.playCount) }}</span>
                </div>
            </div>
            <div class="brief">
                <div class="title">{{ playlist.name }}</div>

                <div class="b-content">
                    <!-- <img :src="playlist.creator.avatarUrl" alt="" class="avatar" /> -->
                    <img :src="playlist.creator.avatarUrl" alt class="avatar" />
                    <img
                        :src="playlist.creator.avatarDetail.identityIconUrl"
                        v-if="playlist.creator.avatarDetail != null"
                        alt
                        class="identityIcon"
                    />

                    <span class="name">{{ playlist.creator.nickname }}</span>
                    <span class="add">+</span>
                </div>
                <div class="more">{{ playlist.description }}</div>
                <span class="iconfont icon-iconfontjiantou3"></span>
            </div>
        </div>
        <div id="bottom">
            <div class="bottom">
                <div class="played" @click="addToplay">
                    <span class="iconfont icon-tianjiazengjiajia"></span>
                    <span class="count">{{ playlist.subscribedCount }}</span>
                </div>

                <div class="comment" @click="commontFn">
                    <span class="iconfont icon-pinglun"></span>
                    <span class="count">{{ playlist.commentCount }}</span>
                </div>

                <div class="shared" @click="shareFn">
                    <span class="iconfont icon-fenxiang"></span>
                    <span class="count">{{ playlist.shareCount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { onMounted } from 'vue';
export default {
    name: "detailTop",
    props: ['playlist'],
    methods: {
        addToplay() {
            Toast("敬请期待...");
        },
        commontFn() {
            Toast("敬请期待...");
        },
        shareFn() {
            Toast("敬请期待...");
        }
    },
    setup() {
        onMounted(() => {
        })
        function changeValue(num) {
            let res = 0
            if (num >= 100000000) {
                res = (num / 100000000).toFixed(1) + '亿'
            } else if (num >= 10000) {
                res = (num / 10000).toFixed(0) + '万'
            }
            return res
        }
        return {
            changeValue
        }
    }

}
</script>
<style lang="less" scoped>
.detail-top {
    width: 7.5rem;
    // height: 6rem;
    .bg {
        width: 7.5rem;
        height: auto;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
        filter: blur(30px);
    }
    .topBar {
        margin-top: 0.2rem;
        padding: 0 0.3rem;
        width: 7.5rem;
        height: 1rem;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        justify-content: space-between;
        .top-left {
            display: flex;
            align-items: center;
            .iconfont {
                width: 0.6rem;
                height: 0.6rem;
                line-height: 0.6rem;
                color: #fff;
                font-size: 0.45rem;
            }
            span:nth-child(2) {
                margin-left: 0.3rem;
                color: #fff;
            }
        }
        .top-right {
            display: flex;
            align-items: center;
            .iconfont {
                color: #fff;
                font-size: 0.45rem;
                margin-left: 0.5rem;
            }
        }
    }
    .top-content {
        margin-top: 1.3rem;
        display: flex;
        justify-content: space-evenly;
        .avatar {
            width: 2.3rem;
            height: 2.3rem;
            position: relative;
            img {
                width: 2.3rem;
                height: 2.3rem;
                border-radius: 0.1rem;
            }
            .play-count {
                position: absolute;
                right: 0.1rem;
                top: 0.1rem;
                border: 0.01rem solid #ddd;
                border-radius: 0.3rem;
                padding: 0 0.1rem;
                background: rgba(58, 57, 57, 0.2);
                span {
                    color: #fff;
                    font-size: 0.18rem;
                }
            }
        }
        .brief {
            width: 4rem;
            height: 2.5rem;
            display: flex;
            flex-direction: column;
            position: relative;
            .title {
                color: #fff;
            }
            .b-content {
                display: flex;
                align-items: center;
                .avatar {
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.3rem;
                }
                .identityIcon {
                    width: 0.2rem;
                    height: 0.2rem;
                    align-self: flex-end;
                }
                .name {
                    color: #eee;
                    font-size: 0.24rem;
                }
                .add {
                    width: 0.7rem;
                    height: 0.5rem;
                    border-radius: 0.25rem;
                    line-height: 0.5rem;
                    text-align: center;
                    background: #666;
                    font-size: 0.4rem;
                    color: #ddd;
                    font-weight: 400;
                    margin-left: 0.1rem;
                }
            }
            .more {
                width: 90%;
                height: 0.6rem;
                overflow: hidden;
                margin-top: 0.25rem;
                // white-space: nowrap;
                color: #ccc;
                font-size: 0.2rem;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .iconfont {
                color: #ccc;
                position: absolute;
                right: 0.2rem;
                bottom: 0.35rem;
            }
        }
    }
    #bottom {
        width: 7.5rem;
        display: flex;
        justify-content: center;
        .bottom {
            margin-top: 0.6rem;
            width: 5rem;
            height: 1rem;
            background: #fff;
            border-radius: 0.5rem;
            display: flex;
            justify-content: space-evenly;
            div {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                .count {
                    font-size: 0.24rem;
                    margin-left: 0.15rem;
                }
            }
            .played,
            .comment {
                border-right: 0.01rem solid #eee;
            }
        }
    }
}
</style>