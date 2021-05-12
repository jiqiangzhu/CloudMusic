<template>
    <div class="good-playlist">
        {{playlist}}
    </div>
</template>
<script>
import { getGoodPlaylist } from '../api'
export default {
    name: "GoodPlaylist",
    data() {
        return {
            playlist: []
        }
    },
    async beforeMount() {
        let result = await getGoodPlaylist();
        this.$store.commit('setPlayFlag', { playControlFlag: false, navBarFlag: false });
        this.playlist = result.data.playlists;
        console.log(result)
    }
}
</script>