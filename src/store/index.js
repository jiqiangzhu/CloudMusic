import { provide } from 'vue';
import { createStore } from 'vuex'
import {getLyric} from '@/api/index'

export default createStore({
  state: {
    playlist: [{al:{}}],
    currentIndex: 0,
    lyric: '',
    currentTime: 0,
    interValId: 0
  },
  getters: {
    listLyric(state) {
      let arr1 =state.lyric.split(/\n/);
      let arr2 = arr1.filter((item, index) => {
        if(item==null || item=="") {
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
      arr3.forEach((item, i)=> {
        if(i==0) {
          item.pre = 0
        } else {
          item.pre = arr3[i-1].time
        }
      })
      let arr4 = arr3.map((item, i)=>{
        return item
      })
      arr4.forEach((item, i)=> {
        item.pre = item.time
        if(i+1>arr4.length-1) {
          item.time = arr4[i].time
        } else {
          item.time = arr4[i+1].time
        }
      })
      return arr4
    }
  },
  mutations: {
    setPlayList(state, list) {
      state.playlist = list
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index
    },
    setLyricList(state, value) {
      state.lyric = value       
    },
    setCurrentTime(state, value) {
      state.currentTime = value
    }
  },
  actions: {
    async setLyric(context, params) {
      let result = await getLyric(params)
      context.commit('setLyricList', result.data.lrc.lyric)
    }
  },
  modules: {
  }
})
