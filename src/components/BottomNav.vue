<template>
    <div class="bottom-nav">
        <div
            class="nav-item"
            :class="item.isActive"
            @click="navFn(i)"
            v-for="(item, i) in navArr"
            :key="i"
        >
            <span class="iconfont" :class="item.icon"></span>
            <span :class="item.txt">{{ item.text }}</span>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "BottomNav",
    data() {
        return {
            isActive: "active"
        }
    },
    computed: {
        ...mapState(['navArr'])
    },
    methods: {
        navFn(i) {
            this.$store.commit("setNavArr", {index: i})
            if(i==0) {
                this.$router.push('/');
            } else if(i==1) {
                this.$router.push({ path: '/recomMv' });
            } else if(i==2) {
                this.$router.push({ path: '/me' });
            }
            // else if(i==3) {
            //     this.$router.push({ path: '/me' });
            //     // this.$router.replace({ path: '/me' });
            // }
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="less" scoped>
.bottom-nav {
    height: 1rem;
    width: 7.5rem;
    display: flex;
    background: rgba(239,239,239);
    .nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .iconfont {
            font-size: 0.32rem;
        }
        span:nth-child(2) {
            font-size: 0.24rem;
        }
    }
    .active {
        color: #ff5000;
    }
}
</style>
