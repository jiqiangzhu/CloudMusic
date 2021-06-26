<template>
    <SearchTop />
</template>

<script>
import SearchTop from '@/components/SearchTop.vue'
import { useStore } from 'vuex'
import { onBeforeMount, onMounted } from 'vue';
export default {
    name: "Search",
    components: {
        SearchTop
    },
    setup() {
        const store = useStore();
        onBeforeMount(()=>{
            store.commit('setPlayFlag', {playControlFlag: true, navBarFlag: false})
        });
    }
}
</script>