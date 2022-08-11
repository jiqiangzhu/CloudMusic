import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index.js'

const routes = [
  {//主页
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
      title: 'Home',
      keepAlive: true
    },
  },
  {//搜索歌曲
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue'),
    meta: {
      title: 'search',
      keepAlive: true
    },
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
    component: () => import(/* webpackChunkName: "Me" */ '../views/Me.vue')
  },
  {//登录
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {//小视频 已弃用
    path: '/films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "Films" */ '../views/Films.vue')
  },
  {//推荐mv
    path: '/recomMv',
    name: 'RecomMV',
    component: () => import(/* webpackChunkName: "RecomMV" */ '../components/RecomMV.vue'),
    meta: {
      title: 'MV',
      keepAlive: true
    },
  },
  {//小视频
    path: '/mvDetails',
    name: 'MVDetails',
    component: () => import(/* webpackChunkName: "MVDetails" */ '../components/MVDetails.vue')
  },
  {//播放小视频
    path: '/playdz',
    name: 'PlayDZ',
    component: () => import(/* webpackChunkName: "PlayDZ" */ '../components/PlayDZ.vue')
  },
  {//音乐歌单详情
    path: '/playlistDetail',
    name: 'PlaylistDetail',
    component: () => import(/* webpackChunkName: "PlaylistDetail" */ '../views/PlaylistDetail.vue'),
    meta: {
      title: 'playlistDetail',
      keepAlive: true
    },
  },
  {//音乐播放页面
    path: '/playPage',
    name: 'PlayPage',
    component: () => import(/* webpackChunkName: "PlayPage" */ '../components/PlayPage.vue'),
    meta: {
      title: 'playPage',
      keepAlive: true
    },
  },
  {//每日推荐
    path: '/recommand',
    name: 'DayRecomm',
    component: () => import(/* webpackChunkName: "DayRecomm" */ '../components/DayRecomm.vue'),
    meta: {
      title: 'recommand',
      keepAlive: true
    },
    // beforeEnter: (from, to, next) => {
    //   // 检查用户是否登录，未登录不能进入
    //   console.log(store.state.user)
    //   if (store.state.user.isLogin) {
    //     next();
    //   } else {
    //     Toast("请先登录");
    //     setTimeout(() => {
    //       next('/login');
    //     }, 1000)
    //   }
    // }
  },
  {//网友精选碟歌单
    path: '/goodPlaylist',
    name: 'GoodPlaylist',
    component: () => import(/* webpackChunkName: "GoodPlaylist" */ '../components/GoodPlaylist.vue')
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
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  } //匹配未找到的路径
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
