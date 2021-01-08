<template>
	<div id="haokan">
		<div class="header">
			<div class="logo"></div>
			<div class="input">
				<div class="search-icon"></div>
				<input type="text" id="input" @keydown.enter="$router.push('/searchVideo')" placeholder="请输入内容" />
			</div>
		</div>
		<div class="play-area">
			<div class="play-item" v-for="(item ,i) in videoList" :key="i">
				<!-- <div class="img" :style="{backgroundImage: url(item.thumbnail)"></div> -->
				<img :src="item.thumbnail" alt="thumbnail" class="img" />
				<button class="play-btn" @click="playFn(i)" :data-index="i"></button>
				<div class="play-bottom">
					<span class="type">原创</span>
					<span class="play-num">{{ item.up }}</span>万次播放
				</div>
				<div class="play-foot">
					<!-- <div class="avator" style="background-image: url(${item.header});"></div> -->
					<img :src="item.header" alt="header" class="avator" />
					<div class="play-brief">
						<div class="author">{{ item.name }}</div>
						<div class="brief">{{ item.text }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="see-more" @click="seeMore">换一批</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import { getDuanzi } from '../api/index.js'
export default {
	name: "HaoKan",
	data() {
		return {

		}
	},
	computed: {
		...mapState(['videoList'])
	},
	methods: {
		playFn(i) {
			this.$router.push({ path: "/playdz", query: { index: i } });
		},
		async initList(num = 10) {
			let data = await getDuanzi(num);
			let tempList = data.data.result;
			return tempList;
		},
		async seeMore() {
			// chrome
			document.body.scrollTop = 0
			// firefox
			document.documentElement.scrollTop = 0
			// safari
			window.pageYOffset = 0
			let videoList = await this.initList();
			this.$store.commit("setVideoList", { videoList: videoList });
		}
	},
	async mounted() {
		this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: true });
		this.$store.commit("setNavArr", {index: 1});
		if (this.videoList.length == 0) {
			let videoList = await this.initList();
			console.log(videoList);
			this.$store.commit("setVideoList", { videoList: videoList })
		}

	}
}
</script>

<style scoped>
#haokan {
	width: 7.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	padding-bottom: 1rem;
}

#haokan .header {
	width: 7.5rem;
	height: 1.02rem;
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	z-index: 1000;
	background-color: #f5f5f9;
}

#haokan .header .logo {
	width: 2.36rem;
	height: 0.68rem;
	margin-left: 0.12rem;
	background-image: url("../assets/duanzi/logo.png");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}
#haokan .header .input {
	width: 2.7rem;
	height: 0.5rem;
	margin-left: 0.26rem;
	overflow: hidden;
	background-color: #f3f3f3;
	border-radius: 0.15rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
}
#haokan .header .input .search-icon {
	width: 0.36rem;
	height: 0.5rem;
	margin-left: 0.1rem;
	background-image: url("../assets/duanzi/search-icon.png");
	background-position: 0 0.06rem;
	background-repeat: no-repeat;
	background-size: 0.36rem 0.36rem;
}

#haokan .header .input input {
	width: 2.12rem;
	height: 0.5rem;
	line-height: 0.5rem;
	border: none;
	outline: none;
	background-color: transparent;
}
#haokan .header button {
	width: 1.48rem;
	height: 0.5rem;
	line-height: 0.5rem;
	margin-left: 0.28rem;
	font-size: 0.24rem;
	background-color: #ff4141;
	font-family: PingFangSC-Medium;
	color: #fff;
	border-radius: 0.18rem;
	border: none;
}
.play-area {
	width: 7.5rem;
	/* height: 2.11rem; */
	/* background-color: #000; */
	position: relative;
	margin-top: 1.04rem;
}

.play-area .img {
	width: 7.5rem;
	/* width: auto; */
	height: 4.22rem;
	background-image: url("../assets/duanzi/bg-img.png");
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
}

.play-area .play-item {
	width: 7.5rem;
	height: 5rem;
	position: relative;
	margin-bottom: 0.1rem;
}

.play-area .play-btn {
	width: 7.5rem;
	height: 4.22rem;
	position: absolute;
	left: 0;
	top: 0;
	outline: none;
	border: none;
	background-image: url(../assets/duanzi/play.png);
	background-repeat: no-repeat;
	background-color: transparent;
	background-position: center center;
	background-size: 0.86rem 0.86rem;
}

.play-area .play-bottom {
	width: 2.2rem;
	height: 0.22rem;
	position: absolute;
	right: 0.2rem;
	bottom: 1rem;
	text-align: right;
	color: #fff;
}

.play-foot {
	width: 7.5rem;
	height: 0.7rem;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-left: 0.1rem;
	align-items: center;
}

.play-foot .avator {
	width: 0.6rem;
	height: 0.6rem;
	border-radius: 0.5rem;
	margin-right: 0.3rem;
	background-image: url("../assets/duanzi/play.png");
	background-repeat: no-repeat;
	background-color: transparent;
	background-position: center center;
	background-size: 0.6rem 0.6rem;
}
.play-foot .play-brief {
	width: 4rem;
}
.play-foot .play-brief .author {
	font-size: 0.26rem;
}
.see-more {
	width: 7.5rem;
	height: 1rem;
	line-height: 1rem;
	display: flex;
	justify-content: center;
	font-size: 0.32rem;
	background-color: #efefef;
	color: #999;
}
.play-brief .brief {
	color: #999;
	height: 0.4rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 0.22rem;
}
#haokan > .brief {
	width: 7.5rem;
	display: flex;
	flex-direction: column;
}

#haokan > .brief .download2 {
	width: 7.4rem;
	height: 0.74rem;
	margin: 0.26rem 0.28rem 0;
	background-color: #ff4141;
	border: none;
	border-radius: 0.19rem;
	color: #fff;
	font-size: 0.26rem;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

#haokan > .brief .download2 .hicon {
	display: block;
	width: 0.36rem;
	height: 0.36rem;
	margin-right: 0.1rem;
	background-image: url(../assets/duanzi/hlogo.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

#haokan > .brief .main {
	width: 7.5rem;
	display: flex;
	flex-direction: column;
}

#haokan > .brief .main .m-top {
	width: 7.48rem;
	height: 0.64rem;
	margin: 0.26rem 0.26rem 0;
	position: relative;
	display: flex;
	flex-direction: row;
}

#haokan > .brief .main .m-top .title {
	width: 7.48rem;
	height: 0.42rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: 0.42rem;
	font-size: 0.32rem;
	overflow: hidden;
	color: #1a1a1a;
	padding-right: 0.36rem;
}

#haokan > .brief .main .m-top .xhicon {
	width: 0.36rem;
	height: 0.36rem;
	position: absolute;
	right: 0;
	top: 0;
	background-image: url(../assets/duanzi/xhicon.png);
	background-size: 0.36rem 0.36rem;
	background-repeat: no-repeat;
	background-position: 0 0;
}

#haokan > .brief .main .content {
	width: 7.5rem;
	height: 0.84rem;
	margin-top: 0.12rem;
	display: flex;
	justify-content: space-around;
}

#haokan > .brief .main .content .item {
	width: 1.5rem;
	height: 0.66rem;
	margin-top: 0.12rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#haokan > .brief .main .content .item:nth-child(1) .item-icon {
	width: 0.4rem;
	height: 0.4rem;
	margin: 0 auto;
	background-image: url("../assets/duanzi/720p.png");
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}

#haokan > .brief .main .content .item:nth-child(2) .item-icon {
	width: 0.4rem;
	height: 0.4rem;
	margin: 0 auto;
	background-image: url(../assets/duanzi/star.png);
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}

#haokan > .brief .main .content .item:nth-child(3) .item-icon {
	width: 0.4rem;
	height: 0.4rem;
	margin: 0 auto;
	background-image: url(../assets/duanzi/download.png);
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}

#haokan > .brief .main .content .item:nth-child(4) .item-icon {
	width: 0.4rem;
	height: 0.4rem;
	margin: 0 auto;
	background-image: url(../assets/duanzi/share.png);
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}

#haokan > .brief .main .content .item:nth-child(5) .item-icon {
	width: 0.4rem;
	height: 0.4rem;
	margin: 0 auto;
	background-image: url(../assets/duanzi/comment.png);
	background-repeat: no-repeat;
	background-position: 0 0;
	background-size: 100% 100%;
}

#haokan > .brief .main .content .item .txt {
	color: #000;
	height: 0.24rem;
	line-height: 0.24rem;
	font-size: 0.24rem;
}

.more {
	width: 7.5rem;
}

.more .migu {
	width: 7.5rem;
	height: 0.64rem;
	margin-top: 0.4rem;
	display: flex;
	padding: 0 0.28rem;
	justify-content: space-between;
	align-items: center;
}

.more .migu .mlogo {
	width: 0.64rem;
	height: 0.64rem;
	background-image: url(../assets/duanzi/mlogo.png);
	background-size: 100% 100%;
	background-position: 0 0;
	background-repeat: no-repeat;
}

.more .migu .mmain {
	flex: 1;
	padding-left: 0.2rem;
	display: flex;
	flex-direction: column;
}

.more .migu button {
	width: 1.08rem;
	height: 0.5rem;
	background-color: #ff4141;
	border: none;
	outline: none;
	color: #fff;
	border-radius: 0.12rem;
}
.video {
	width: 7.5rem;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: transparent;
	background-color: #000;
	display: none;
}
.video video {
	width: 7.5rem;
	height: 5.6rem;
}
.video .close {
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	right: 0.2rem;
	top: 1.6rem;
	background-image: url(../assets/duanzi/close.png);
	background-repeat: no-repeat;
	background-size: 40% 40%;
}
</style>