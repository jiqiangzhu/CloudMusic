<template>
    <div class="day-recomm">
        <detailTop :playlist="state.playlist" class="detail-top"></detailTop>
        <PlayList :playlist="state.playlist" class="playlist" />
    </div>
</template>
<script>
import { getDayRecomMusicList } from '@/api/index.js';
import detailTop from './detailTop.vue';
import PlayList from './PlayList.vue';
import { onMounted, reactive } from 'vue';
import store from '@/store/index.js';
import { Toast } from 'vant';
export default {
    components: {
        detailTop, PlayList
    },
    setup() {

        const state = reactive({
            playlist: {
                creator: {
                    avatarDetail: {
                        identityIconUrl: ''
                    }
                },
                tracks: []
            },
            avatarUrl: '',
            ar: []
        });
        onMounted(async () => {
            store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: false })
            try{
                let result = await getDayRecomMusicList();
                debugger
                console.log(result);
            } catch(e) {
                console.log(e);
            }
            
        })
        return {state};
    }
}
</script>