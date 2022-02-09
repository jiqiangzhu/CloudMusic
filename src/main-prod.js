import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './common/rem.js'
import { Toast, Popup } from 'vant';
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

window.Toast = Toast
window.Swiper = Swiper
window.baseUrl = "https://qg-unlock-netease-cloud.blairq.top/"
createApp(App).use(store).use(router).use(Popup).mount('#app')

