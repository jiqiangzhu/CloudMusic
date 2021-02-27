<template>
    <div class="films">
        <div class="content">
            <van-skeleton title :row="8" :loading="loadingFlag" round>
                <van-row>
                    <!-- <van-col span="4"></van-col> -->
                    <van-col span="24" class="mv-top">
                        <van-icon
                            name="arrow-left"
                            :size="24"
                            color="#333"
                            @click="$router.go(-1)"
                        />
                    </van-col>
                </van-row>
                <van-row class="mv-content">
                    <van-col span="24" @click="clickMVEvent">
                        <van-row justify="center">
                            <video
                                ref="mvVideo"
                                :src="videoUrl"
                                controls
                                autoplay
                                :height="200"
                                :width="350"
                            ></video>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row>
                    <van-col span="6" offset="1" class="count">
                        播放次数： {{details.playCount}}
                    </van-col>
                    <van-col span="6" offset="1" class="count">
                        分享次数：{{details.shareCount}}
                    </van-col>
                    <van-col span="6" offset="1" class="count">
                        评论数：{{details.commentCount}}
                    </van-col>
                </van-row>
                <van-row justify="center">
                    <van-col span="16" class="van-ellipsis mv-title">{{ details.name }}-{{ details.artistName }}</van-col>
                </van-row>
                <van-row v-if="details.desc">
                    <van-col span="22" offset="1">
                        <div class="van-multi-ellipsis--l3 mv-brief">简介：{{ details.desc }}</div>
                    </van-col>
                </van-row>
                <br />
                <br />
                <br />
            </van-skeleton>
        </div>
    </div>
</template>
<script>
import { Skeleton as VanSkeleton, Toast, Button as VanButton, Col as VanCol, Row as VanRow, Search as VanSearch } from 'vant';
import { Grid as VanGrid, GridItem as VanGridItem, Image as VanImage, Icon as VanIcon } from 'vant';
import { getMVAddress, getMVDetailInfo, getRecomMV } from '../api';
export default {
    name: "MVDetails",
    data() {
        return {
            loadingFlag: true,
            details: {},
            videoUrl: ""
        }
    },
    components: {
        VanSkeleton, VanGrid, VanGridItem, VanImage, VanButton, VanCol, VanRow, VanSearch, VanIcon
    },
    methods: {
        async onLoad() {
            this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
            this.$store.commit("setNavArr", { index: 1 });

        },
        async seeFilmsDetail() {
            let mvId = this.$route.query.mvid;
            let result = await getMVAddress(mvId);
            console.log("MV播放地址------------------", result);
            this.videoUrl = result.data.data.url;
            console.log("MV-Url------------------", this.videoUrl);
            this.details = await getMVDetailInfo(mvId);
            this.details = this.details.data.data;
            console.log("this.details------------------", this.details);
        },
        clickMVEvent() {
            if (this.$refs.mvVideo.paused) {
                this.$refs.mvVideo.play()
            } else {
                this.$refs.mvVideo.pause()
            }
        }
    },
    async mounted() {
        await this.seeFilmsDetail();
        await this.onLoad();
        console.log("this.$route.query.id------->>>>>>>", this.$route.query.mvid);
        this.loadingFlag = false;

    },
    async updated() {
        await this.onLoad();
    }
}
</script>
<style lang="less" scoped>
.films {
    width: 7.5rem;
    height: 100vh;
    overflow: scroll;
    background: #efefef;
    .mv-top {
        width: 7.5rem;
        position: fixed;
        left: 0;
        top: 0.2rem;
        z-index: 100;
    }
    .count {
        background: rgba(164, 201, 198, 0.205);
        border-radius: 0.3rem;
        text-align: center;
        color: #999;
    }
    .mv-content {
        margin-top: 0.5rem;
        margin-bottom: 0.1rem;
    }
    .mv-title {
        text-align: center;
        font-size: 0.4rem;
        margin-bottom: 0.2rem;
    }
    .mv-brief {
        text-indent: 1em;
        font-size: 0.12rem;
        color: #999;
    }
}
</style>