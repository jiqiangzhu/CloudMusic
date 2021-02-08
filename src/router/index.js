import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import store from '@/store/index.js';
import Games from '../views/Games.vue';
import { Toast } from 'vant';
const routes = [
  {//主页
    path: '/',
    name: 'Home',
    component: Home
  },
  {//搜索歌曲
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {//游戏
    path: '/games',
    name: 'Games',
    component: Games
  },
  {//飞机大战
    path: '/hitPlane',
    name: 'HitPlane',
    component: () => import(/* webpackChunkName: "about" */ '../components/HitPlane.vue')
  },
  {//推箱子
    path: '/pullBox',
    name: 'PullBox',
    component: () => import(/* webpackChunkName: "about" */ '../components/PullBox.vue')
  },
  {//我的
    path: '/me',
    name: 'Me',
    beforeEnter: (to, from, next) => {
      if (store.state.user.isLogin) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  },
  {//登录
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {//小视频
  //   path: '/duanzi',
  //   name: 'Duanzi',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Duanzi.vue')
  // },
  {//小视频
    path: '/films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "about" */ '../views/Films.vue')
  },
  {//播放小视频
    path: '/playdz',
    name: 'PlayDZ',
    component: () => import(/* webpackChunkName: "about" */ '../components/PlayDZ.vue')
  },
  {//音乐歌单详情
    path: '/playlistDetail',
    name: 'PlaylistDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlaylistDetail.vue')
  },
  {//音乐播放页面
    path: '/playPage',
    name: 'PlayPage',
    component: () => import(/* webpackChunkName: "about" */ '../components/PlayPage.vue')
  },
  {//每日推荐
    path: '/recommand',
    name: 'DayRecomm',
    component: () => import(/* webpackChunkName: "about" */ '../components/DayRecomm.vue'),
    beforeEnter: (from, to, next) => {
      // 检查用户是否登录，未登录不能进入
      console.log(store.state.user)
      if (store.state.user.isLogin) {
        next();
      } else {
        Toast("请先登录");
        setTimeout(() => {
          next('/login');
        }, 1000)
      }
    }
  },
  {//网友精选碟歌单
    path: '/goodPlaylist',
    name: 'GoodPlaylist',
    component: () => import(/* webpackChunkName: "about" */ '../components/GoodPlaylist.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {//404页面
    path: '/:id(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  } //匹配未找到的路径
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
