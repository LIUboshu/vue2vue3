<template>
    <div class="school">
        <h2>学校名字:{{schollName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                schollName:"清华大学",
                address:'北京'
            }
        },
    }
</script>

<style scoped>
    .school{
        background-color: burlywood;
    }
</style>