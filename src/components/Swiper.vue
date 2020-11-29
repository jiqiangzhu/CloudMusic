<template>
    <div id="swiper-com">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in imgList" :key="i"> 
                    <img :src="item.pic" alt="swiper">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
        </div>
    </div>
</template>
<script>

import Swiper from 'swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
import {getBanner} from '../api/index'
export default {
  data() {
      return {
          imgList: [
            //   {pic:require('../assets/img/swiper1.jpg')},
              {pic:require('../assets/img/swiper2.jpg')},
              {pic:require('../assets/img/swiper3.jpg')}
          ]
      }
  },
  components: {
    Swiper
  },
  async mounted() {
      var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })  
      
    let res = await getBanner(1)
    this.imgList = res.data.banners;
    console.log(this.imgList);
  }
}
</script>

<style lang="less">
#swiper-com {
    width: 7.5rem;
    .swiper-container {
        width: 7.5rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        .swiper-slide {
            width: 7.5rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            img {
                width: 7.1rem;
                height: 3rem;
                border-radius: 0.1rem;
            }
        }
        
    }  
}
</style>