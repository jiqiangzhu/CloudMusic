<template>
    <div id="play-list">
        <detailTop :playlist="state.playlist" class="detail-top"></detailTop>
        <PlayList :playlist="state.playlist" class="playlist" />
    </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import { getPlaylistDetail } from '@/api/index'
import detailTop from '@/components/detailTop.vue'
import PlayList from '@/components/PlayList.vue'
import Bottom from '@/views/Bottom.vue'
import playCtl from '@/views/playCtl.vue'
import { useRoute } from 'vue-router'
import store from '@/store/index';
import { mapState, useStore } from 'vuex';
export default {
    name: "PlaylistDetail",
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
            console.log("============>>>>>>>>>>playlistDetail>>>>>>", route);
            let id = route.query.id;
            let result = await getPlaylistDetail(id);
            let data = result.data;
            state.playlist = data.playlist;
            // store.commit('setPlayList', data.playlist.tracks)
            store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: false })
            console.log("setPlayList-tracks: ", data.playlist.tracks);
            state.avatarUrl = data.playlist.creator.avatarUrl;

        })
        return {
            state
        }
    }

}
</script>