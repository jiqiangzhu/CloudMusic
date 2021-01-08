import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'
import Games from '../views/Games.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/hitPlane',
    name: 'HitPlane',
    component: () => import(/* webpackChunkName: "about" */ '../components/HitPlane.vue')
  },
  {
    path: '/me',
    name: 'Me',
    beforeEnter: (to, from, next)=> {
      if(store.state.user.isLogin) {
        next()
      } else {
        next('/login')
      }
      
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/duanzi',
    name: 'Duanzi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Duanzi.vue')
  },{
    path: '/playdz',
    name: 'PlayDZ',
    component: () => import(/* webpackChunkName: "about" */ '../components/PlayDZ.vue')
  },
  {
    path: '/playlistDetail',
    name: 'PlaylistDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlaylistDetail.vue')
  },
  {
    path: '/playPage',
    name: 'PlayPage',
    component: () => import(/* webpackChunkName: "about" */ '../components/PlayPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/:id(.*)', 
  component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue') } //匹配未找到的路径
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
