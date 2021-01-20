import axios from 'axios'


// let baseUrl = "http://188.131.193.21:3000";
// 121腾讯云服务器api接口
let baseUrl = "http://121.5.9.142:3000"
// 本地api
// let baseUrl = "http://localhost:3000"

// 网易云音乐api 调用此接口 , 可获取 banner( 轮播图 ) 数据
//  type:资源类型,对应以下类型,默认为 0 即PC
// 1: android  2: iphone   3: ipad
export function getBanner(type = 0) {
    return axios({
        baseURL: baseUrl,
        url: `/banner?type=${type}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/banner?type=${type}`)
    // return await axios({
    //     baseURL: baseUrl,
    //     url: `/banner?type=${type}`
    // })
}

// 推荐歌单 /personalized?limit=1  调用此接口 , 可获取推荐歌单
// limit: 取出数量 , 默认为 30 (不支持 offset)
export function getRecMusicList(limit = 30) {
    return axios({
        baseURL: baseUrl,
        url: `/personalized?limit=${limit}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}
// 每日推荐 /personalized?limit=1  调用此接口 , 可获取推荐歌单
export function getDayRecomMusicList() {
    return axios({
        baseURL: baseUrl,
        url: `/recommend/resource`,
        withCredentials: true //关键
    })
}

// 歌单详情页api
// 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
export function getPlaylistDetail(id) {
    return axios({
        baseURL: baseUrl,
        url: `/playlist/detail?id=${id}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词
// /lyric?id=33894312
export function getLyric(id) {
    return axios({
        baseURL: baseUrl,
        url: `/lyric?id=${id}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 关键词搜索 
// /search?keywords= 海阔天空
export function getSearchResults(keyword) {
    return axios({
        baseURL: baseUrl,
        url: `/cloudsearch?keywords=${keyword}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
}

// 手机登录 
// /login/cellphone?phone=${phone}&password=${password}
export function phoneLogin(phone, password) {
    return axios({
        baseURL: baseUrl,
        url: `/login/cellphone?phone=${phone}&password=${password}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户详情 
// /search?keywords= 海阔天空
export function getUserDetail(uid) {
    return axios({
        baseURL: baseUrl,
        url: `/user/detail?uid=${uid}`,
        withCredentials: true //关键
    })
    // return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

// 获取段子
export function getDuanzi(num = 10) {
    let pageNum = Math.floor(Math.random() * 20) + 1;
    // return axios({
    //     baseURL: "https://api.apiopen.top",
    //     url: `/getJoke?page=${pageNum}&count=${num}&&type=video`,
    //     withCredentials: true //关键
    // })
    return axios.get(`https://api.apiopen.top/getJoke?page=${pageNum}&count=${num}&&type=video`)
}

// 私人FM
export function getPersonalFM() {
    return axios({
        baseURL: baseUrl,
        url: `/personal_fm`,
        withCredentials: true //关键
    })
}