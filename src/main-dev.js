import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './static/mui.min.js';
import './common/rem.js'
import { Toast, Popup } from 'vant';

window.Toast = Toast

createApp(App).use(store).use(router).use(Popup).mount('#app')

