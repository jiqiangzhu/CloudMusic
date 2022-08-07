import { createStore } from 'vuex'
import { getLyric, phoneLogin, getUserDetail } from '@/api/index'
export default createStore({
  state: {
    playControlFlag: true,
    navBarFlag: true,
    loopFlag: false,
    birthFlag: true,
    refreshSearch: true, //刷新标志 
    // 进度条
    progress: 0,
    // currentRate: 0,
    playlist: [{
      al: {
        id: 91888443,
        name: "是想你的声音啊",
        pic: 109951165109878600,
        picUrl: "http://p3.music.126.net/cIR63lyPGgQ4mAyuOTg8lA==/109951165109878587.jpg",
        pic_str: "109951165109878587",
      },
      id: 1807500165,
      name: "是你的声音啊",
      ar: [{ name: "傲七爷" }]
    }],
    videoList: [],
    currentIndex: 0,
    lyric: '',
    currentTime: 0,
    duration: 0.00,
    user: {
      isLogin: false,
      userDetail: {},
      userAccount: {}
    },
    paused: true,
    navArr: [
      { icon: "icon-icon--", txt: "see", text: "首页", isActive: "active" },
      { icon: "icon-_gongguanchuanbo", txt: "boke", text: "MV", isActive: "" },
      // { icon: "icon-yinyue", txt: "game", text: "游戏", isActive: "" },
      { icon: "icon-daohanglan-05", txt: "my", text: "我的", isActive: "" }
    ]
  },
  getters: {
    listLyric(state) {
      if (state.lyric == null) {
        return
      }
      let arr1 = state.lyric.split(/\n/);
      let arr2 = arr1.filter((item, index) => {
        if (item == null || item == "") {
          return false
        } else {
          return true
        }
      })
      let arr3 = arr2.map((item, index) => {
        let min = parseInt(item.slice(1, 3))
        let sec = parseInt(item.slice(4, 6))
        let mil = parseInt(item.slice(7, 10))
        let time = min * 60 * 1000 + sec * 1000 + mil
        let content = item.slice(11, item.length)
        return {
          content: content,
          min: min,
          sec: sec,
          mil: mil,
          time: time,
          item: item
        }
      })
      arr3.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0
        } else {
          item.pre = arr3[i - 1].time
        }
      })
      let arr4 = arr3.map((item, i) => {
        return item
      })
      arr4.forEach((item, i) => {
        item.pre = item.time
        if (i + 1 > arr4.length - 1) {
          item.time = arr4[i].time
        } else {
          item.time = arr4[i + 1].time
        }
      })
      return arr4
    }
  },
  mutations: {
    // 首页播放生日快乐
    setBirthFlag(state) {
      state.birthFlag = false;
    },
    // 音乐总时长
    setDuration(state, value) {
      state.duration = value;
      localStorage.duration = value;
    },
    // 设置进度条
    setProgress(state, value) {
      let currentProgress = (value * 100).toFixed(2);
      state.progress = currentProgress;
      // console.log("-------currentProgress------", currentProgress);
    },
    // 设置是否循环播放
    setLoopFlag(state) {
      state.loopFlag = !state.loopFlag;
      localStorage.loopFlag = state.loopFlag;
    },
    // 从本地存储中取播放模式
    setLocalLoopFlag(state) {
      if (localStorage.loopFlag || localStorage.loopFlag != "undefined") {
        if (localStorage.loopFlag == "false") {
          state.loopFlag = false;
        } else {
          state.loopFlag = true;
        }
      }
    },

    // 导航栏切换
    setNavArr(state, value) {
      state.navArr.forEach((item, index) => {
        if (value.index == index) {
          item.isActive = "active"
        } else {
          item.isActive = ""
        }
      })
    },
    // 控制音乐播放
    setPausedFlag(state, value) {
      state.paused = value.paused
    },
    // 状态栏音乐控制器显示控制
    setPlayFlag(state, flag) {
      state.playControlFlag = flag.playControlFlag;
      state.navBarFlag = flag.navBarFlag;
    },
    // 设置播放列表
    setPlayList(state, list) {
      if (list) {
        state.playlist = list;
        // 更新本地存储中的播放列表
        localStorage.playlist = JSON.stringify(list);
      }
    },
    // 设置当前播放索引
    setCurrentIndex(state, index) {
      state.currentIndex = index;
      localStorage.currentIndex = index;
    },
    setLyricList(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
      localStorage.currentTime = value;
    },
    setUser(state, value) {
      state.user = value
    },
    setVideoList(state, value) {
      state.videoList = value.videoList
    },
    setRefreshSearch(state, flag) {
      state.refreshSearch = flag
    }
  },
  actions: {
    async setLyric(context, params) {
      let result = await getLyric(params);
      if (!result.data.lrc) {
        context.commit('setLyricList', '')
      } else {
        context.commit('setLyricList', result.data.lrc.lyric)
      }
    },
    async phoneLogin(context, params) {
      let result = await phoneLogin(params.phone, params.password)
      if (result.data.code == 200) {
        context.state.user.isLogin = true
        context.state.user.userAccount = result.data.account
        // 获取用户详情
        let userDetail = await getUserDetail(result.data.account.id)
        context.state.user.userDetail = userDetail.data
        context.commit('setUser', context.state.user)
        // 本地存储
        localStorage.userInfo = JSON.stringify(context.state.user)
      }
      return result
    }
  },
  modules: {
  }
})
