import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/font/iconfont.css';
import './common/rem.js'

createApp(App).use(store).use(router).mount('#app')

