<template>
    <div class="films">
        <van-skeleton title :row="8" :loading="loadingFlag" round>
            <van-row>
                <!-- <van-col span="4"></van-col> -->
                <van-col span="24">
                    <van-search background="#efefef" @click="SearchFn()" @keydown.enter="getFilmByName()" disabled shape="round" placeholder="请输入搜索关键词" />
                </van-col>
                <!-- <van-col span="4"></van-col> -->
            </van-row>
            <van-grid :border="false" :column-num="2">
                <van-grid-item
                    v-for="(item, index) in details"
                    @click="seeFilmsDetail(index)"
                    :key="index"
                >
                    <van-image radius="5" :src="item.img" />
                    <span>{{ item.title }}</span>
                </van-grid-item>
                <van-grid-item>
                    <van-button type="primary" @click.stop="getFilmByName()">换一批</van-button>
                </van-grid-item>
            </van-grid>
            <br />
            <br />
            <br />
        </van-skeleton>
    </div>
</template>
<script>
import { Skeleton as VanSkeleton, Toast, Button as VanButton, Col as VanCol, Row as VanRow, Search as VanSearch } from 'vant';
import { Grid as VanGrid, GridItem as VanGridItem, Image as VanImage } from 'vant';
import { getRecomMV } from '../api';
export default {
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
        seeFilmsDetail() {

        },
        SearchFn() {
            Toast("暂不支持哟......");
        },
        async getFilmByName() {
            Toast("抱歉，没有更多了....")
        },
        async getMV() {
            let result = await getRecomMV();
            console.log(result);
            if (result) {
                // this.details = result.data.result.records;
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
}
</script>