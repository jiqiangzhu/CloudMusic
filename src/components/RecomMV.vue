<template>
    <div class="films">
        <div class="content">
            <van-skeleton title :row="8" :loading="loadingFlag" round>
                <van-row>
                    <!-- <van-col span="4"></van-col> -->
                    <van-col span="24" class="mv-top">
                        <van-search
                            background="#efefef"
                            @keydown.enter="getFilmByName()"
                            shape="round"
                            placeholder="请输入搜索关键词"
                        />
                    </van-col>
                    <!-- <van-col span="4"></van-col> -->
                </van-row>

                <!-- <h1>最新MV</h1> -->
                <van-grid :border="false" :column-num="2" class="mv-content">
                    <van-grid-item
                        v-for="(item, index) in details"
                        @click="seeFilmsDetail(index)"
                        :key="index"
                    >
                        <van-image radius="5" :src="item.cover" />
                        <span style="text-align: center;">{{ item.name }} - {{ item.artistName }}</span>
                    </van-grid-item>
                    <!-- <van-grid-item>
                        <van-button type="primary" @click.stop="getFilmByName()">换一批</van-button>
                    </van-grid-item>-->
                </van-grid>
                <br />
                <br />
                <br />
            </van-skeleton>
        </div>
    </div>
</template>
<script>
import { Skeleton as VanSkeleton, Toast, Button as VanButton, Col as VanCol, Row as VanRow, Search as VanSearch } from 'vant';
import { Grid as VanGrid, GridItem as VanGridItem, Image as VanImage } from 'vant';
import { getMVAddress, getMVDetailInfo, getRecomMV } from '../api';
export default {
    name: "RecomMV",
    data() {
        return {
            loadingFlag: true,
            details: []
        }
    },
    components: {
        VanSkeleton, VanGrid, VanGridItem, VanImage, VanButton, VanCol, VanRow, VanSearch
    },
    methods: {
        async onLoad() {
            this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
            this.$store.commit("setNavArr", { index: 1 });

        },
        async seeFilmsDetail(index) {
            this.$router.push({path: '/mvDetails', query: {mvid: this.details[index].id}});
            // console.log(this.details[index]);
            // let result = await getMVAddress(this.details[index].id);
            // console.log("MV播放地址------------------", result);
            // let videoUrl = result.data.data.url;
            // console.log("MV-Url------------------", videoUrl);
            // let details = await getMVDetailInfo(this.details[index].id);
            // console.log("details------------------", details);
        },
        SearchFn() {
            // Toast("暂不支持哟......");
        },
        async getFilmByName() {
            Toast("抱歉，没有更多了....");
        },
        async getMV() {
            let result = await getRecomMV();
            console.log(result);

            if (result) {
                this.details = result.data.data;
            } else {
                Toast("网络不太给力，请重新加载....");
            }
        }
    },
    async mounted() {
        await this.onLoad();
        await this.getMV();
        this.loadingFlag = false;
    },
    async updated() {
        await this.onLoad();
    }
}
</script>
<style lang="less" scoped>
.mv-top {
    width: 7.5rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}

.mv-content {
    margin-top: 1rem;
}
</style>