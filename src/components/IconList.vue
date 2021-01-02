<template>
    <div id="icon-list">
        <div class="i-list">
            <div class="list-item">
                <div class="icon-item">
                    <!-- <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhibo" />
                    </svg> -->
                    <!-- <span class="iconfont">&#xe631;</span> -->
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-rili"></use>
                    </svg>
                </div>
                <span class="txt">每日推荐</span>
            </div>
            <div class="list-item">
                <div class="icon-item">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-FM_weixuanze" />
                    </svg>
                </div>
                <span class="txt">私人FM</span>
            </div>
            <div class="list-item">
                <div class="icon-item">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gedan" />
                    </svg>
                </div>
                <span class="txt">歌单</span>
            </div>
            <div class="list-item">
                <div class="icon-item">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-biaoqiankuozhan_paihang-128" />
                    </svg>
                </div>
                <span class="txt">排行榜</span>
            </div>
            <div class="list-item">
                <div class="icon-item">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhibo" />
                    </svg>
                </div>
                <span class="txt">直播</span>
            </div>
        </div>
        <div class="icon-bottom-line"></div>
    </div>
</template>
<script>


export default {
    data() {
        return {

        }
    },
    components: {

    },
    async mounted() {


    }
}
</script>

<style lang="less">
#icon-list {
    height: 2rem;
    width: 7.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .i-list {
        width: 7.5rem;
        display: flex;
        justify-content: space-around;
        .list-item {
            width: 1.2rem;
            height: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            .icon-item {
                width: 1rem;
                height: 1rem;
                background: pink;
                border-radius: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }
            .txt {
                // height: 0.8rem;
                // line-height: 0.8rem;
                font-size: 0.2rem;
                // padding-top: 0.15rem;
            }
        }
    }
    .icon-bottom-line {
        width: 100%;
        height: 0.02rem;
        background: #ddd;
    }
}
</style>