import axios from 'axios';

// 121腾讯云服务器api接口
// let baseUrl = "http://121.5.9.142:3000";
// let baseUrl = ""
let baseUrl = "https://qg-unlock-netease-cloud.blairq.top/"
// 本地api
// let baseUrl = "http://localhost:3000"

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(data => {
  return Promise.resolve(data)
}, reason => {
  console.log(reason)
  return Promise.reject(reason)
})





// 网易云音乐api 调用此接口 , 可获取 banner( 轮播图 ) 数据
//  type:资源类型,对应以下类型,默认为 0 即PC
// 1: android  2: iphone   3: ipad
export function getBanner(type = 0) {
  return axios({
    baseURL: baseUrl,
    url: `banner?type=${type}`,
    withCredentials: true //关键
  })
}

// 推荐歌单 /personalized?limit=1  调用此接口 , 可获取推荐歌单
// limit: 取出数量 , 默认为 30 (不支持 offset)
export function getRecMusicList(limit = 30) {
  return axios({
    baseURL: baseUrl,
    url: `personalized?limit=${limit}`,
    withCredentials: true //关键
  })
}

// 每日推荐 /personalized?limit=1  调用此接口 , 可获取推荐歌单
export function getDayRecomMusicList() {
  return axios({
    baseURL: baseUrl,
    url: `recommend/resource`,
    withCredentials: true //关键
  })
}

// 歌单详情页api
// 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
export function getPlaylistDetail(id) {
  return axios({
    baseURL: baseUrl,
    url: `playlist/detail?id=${id}`,
    withCredentials: true //关键
  })
  // return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词
// /lyric?id=33894312
export function getLyric(id) {
  return axios({
    baseURL: baseUrl,
    url: `lyric?id=${id}`,
    withCredentials: true //关键
  })
  // return axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 关键词搜索 
// /search?keywords= 海阔天空
export function getSearchResults(keyword) {
  return axios({
    baseURL: baseUrl,
    url: `cloudsearch?keywords=${keyword}`,
    withCredentials: true //关键
  })
}

// 手机登录 
// /login/cellphone?phone=${phone}&password=${password}
export function phoneLogin(phone, password) {
  return axios({
    baseURL: baseUrl,
    url: `login/cellphone?phone=${phone}&password=${password}`,
    withCredentials: true //关键
  })
}

// 获取用户详情 
// /search?keywords= 
export function getUserDetail(uid) {
  console.log("uid--------------------", uid);
  return axios({
    baseURL: baseUrl,
    url: `user/detail?uid=${uid}`,
    withCredentials: true //关键
  })
}

// 获取段子
export function getDuanzi(num = 10) {
  let pageNum = Math.floor(Math.random() * 20) + 1;
  return axios.get(`https://api.apiopen.top/getJoke?page=${pageNum}&count=${num}&&type=video`)
}

// 私人FM
export function getPersonalFM() {
  return axios({
    baseURL: baseUrl,
    url: `personal_fm`,
    withCredentials: true //关键
  })
}


/**
 * 歌单 ( 网友精选碟 )
 说明 : 调用此接口 , 可获取网友精选碟歌单

 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'

 cat:cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)

 limit: 取出歌单数量 , 默认为 50

 offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

 接口地址 : /top/playlist

 调用例子 : /top/playlist?limit=10&order=new
 */
export function getGoodPlaylist() {
  return axios({
    baseURL: baseUrl,
    url: `top/playlist?limit=10&order=new`,
    withCredentials: true //关键
  })
}

/**
 * 调用此接口 , 可获取默认搜索关键词
 */
export function getDefaultSearchKey() {
  return axios({
    baseURL: baseUrl,
    url: `search/default`,
    withCredentials: true //关键
  })
}

/**
 * 获取MV
 */
export function getRecomMV(limit = 30) {
  return axios({
    baseURL: baseUrl,
    url: `mv/first?limit=${limit}`,
    withCredentials: true //关键
  })
}

// 获取MV播放地址
export function getMVAddress(id) {
  return axios({
    baseURL: baseUrl,
    url: `mv/url?id=${id}`,
    withCredentials: true //关键
  })
}

// 获取MV详细信息
export function getMVDetailInfo(mvid) {
  return axios({
    baseURL: baseUrl,
    url: `mv/detail?mvid=${mvid}`,
    withCredentials: true //关键
  })
}
