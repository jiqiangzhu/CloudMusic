<template>
  <SearchTop ref="search" />
</template>

<script>
import SearchTop from '@/components/SearchTop.vue'
import { useStore } from 'vuex'
import { onBeforeMount, onMounted } from 'vue'
export default {
  name: "Search",
  components: {
    SearchTop
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$nextTick(() => {
        vm.$refs.search.init()
      })
    })
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.commit('setPlayFlag', { playControlFlag: true, navBarFlag: false })
    })
    onMounted(() => {

    })
  }
}
</script>