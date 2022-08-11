<template>
  <div class="p-fm"></div>
</template>
<script>
import { getPersonalFM } from '../api'
export default {
  name: "PersonalFM",
  data () {
    return {

    }
  },
  async mounted () {
    let result = await getPersonalFM()
    console.log(result)
  },
  components: {

  }
}
</script>