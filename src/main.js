import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './static/mui.min.js';

createApp(App).use(store).use(router).mount('#app')

