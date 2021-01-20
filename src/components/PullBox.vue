<template>
    <div class="pull-box"></div>
</template>
<script>
export default {
    mounted() {
        mui.back = function() {
            window.history.go(-1);
        }
    }
}
</script>