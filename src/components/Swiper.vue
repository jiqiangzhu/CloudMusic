<template>
    <div id="swiper-com">
        <div class="swiper-container" :id="'swiperIndex'+id">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in imgList" :key="i">
                    <slot :item="item"></slot>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- <button class="next" style="position: absolute; z-index: 100;" @click="nextFn">下一张</button> -->
        </div>
    </div>
</template>
<script>

export default {
    name: 'Swiper',
    props: {
        imgList: {
            type: Array,
            default: []
        },
        loop: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            swiper: null,
            id: parseInt(Math.random()*100000)
        }
    },
    components: {
        Swiper
    },
    methods: {
        nextFn() {
            this.swiper.slideNext()
        },
        instance() {
            if(this.swiper) {
                this.swiper.destroy()
            }
            this.swiper = new Swiper ('#swiperIndex'+this.id, {
                // direction: 'vertical', // 垂直切换选项
                loop: this.loop, // 循环模式选项
                autoplay: this.autoplay,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: ()=>{
                        this.$emit('slideChangeTransitionStart')
                    },
                    slideChangeTransitionEnd: ()=>{
                        this.$emit('slideChangeTransitionEnd')
                    }
                }
            })
        }
    },
    async updated() {
        this.instance()
    },
    async mounted() {
        this.instance()
        
    }
}
</script>

<style lang="less">
#swiper-com {
    width: 100%;
    margin-top: 1rem;
    .swiper-container {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        .swiper-slide {
            width: 100%;
            height: 150px;
            display: flex;
            justify-content: center;
            img {
                width: 96%;
                height: 150px;
                border-radius: 5px;
            }
        }
        
    }  
}
</style>