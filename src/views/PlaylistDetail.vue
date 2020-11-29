<template>
    <div id="play-list">
        <detailTop :playlist="state.playlist"></detailTop>
        <PlayList :playlist="state.playlist" />
        <Bottom :playFlag="true" :barFlag="false" :playlist="state.playlist" />
        
    </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import {getPlaylistDetail} from '@/api/index'
import detailTop from '@/components/detailTop.vue'
import PlayList from '@/components/PlayList.vue'
import Bottom from '@/views/Bottom.vue'
import playCtl from '@/components/playCtl.vue'
import {useRoute} from 'vue-router'
import store from '@/store/index'
export default {
    components: {
        detailTop,
        PlayList,
        playCtl,
        Bottom
    },
    setup() {
        const route = useRoute();
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
        })
        onMounted(async () => {
            let id = route.query.id
            let result = await getPlaylistDetail(id)
            let data = result.data
            // console.log("PlaylistDetail: ", data);
            state.playlist = data.playlist
            store.commit('setPlayList', data.playlist.tracks)
            // console.log("setPlayList-tracks: ", data.playlist.tracks);
            state.avatarUrl = data.playlist.creator.avatarUrl
        })
        return {
            state
        }
    }

}
</script>