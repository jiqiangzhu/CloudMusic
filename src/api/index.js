import axios from 'axios'

let baseUrl = "http://188.131.193.21:3000"
// let baseUrl = "http://music.cpengx.cn"

// 网易云音乐api 调用此接口 , 可获取 banner( 轮播图 ) 数据
//  type:资源类型,对应以下类型,默认为 0 即PC
// 1: android  2: iphone   3: ipad
export function getBanner(type=0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 推荐歌单 /personalized?limit=1  调用此接口 , 可获取推荐歌单
// limit: 取出数量 , 默认为 30 (不支持 offset)
export function getRecMusicList(limit=30) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 歌单详情页api
// 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
export function getPlaylistDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词
// /lyric?id=33894312
export function getLyric(id) {
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 关键词搜索 
// /search?keywords= 海阔天空
export function getSearchResults(keyword) {
    return axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
}

// 手机登录 
// /login/cellphone?phone=${phone}&password=${password}
export function phoneLogin(phone, password) {
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户详情 
// /search?keywords= 海阔天空
export function getUserDetail(uid) {
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}