import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './static/mui.min.js';
import './common/rem.js'
import { Toast, Popup } from 'vant';
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

window.Toast = Toast
window.Swiper = Swiper
createApp(App).use(store).use(router).use(Popup).mount('#app')

