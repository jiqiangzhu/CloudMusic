import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './common/rem.js'
import { Toast, Popup } from 'vant';

window.Toast = Toast
window.baseUrl = "https://qg-unlock-netease-cloud.blairq.top/"
createApp(App).use(store).use(router).use(Popup).mount('#app')

