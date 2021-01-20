<template>
    <div class="p-fm">

    </div>
</template>
<script>
import { getPersonalFM } from '../api'
export default {
    name: "PersonalFM",
    data() {
        return {

        }
    },
    async mounted() {
        mui.back = function() {
            window.history.go(-1);
        }
        let result = await getPersonalFM();
        console.log(result);
    },
    components: {

    }
}
</script>