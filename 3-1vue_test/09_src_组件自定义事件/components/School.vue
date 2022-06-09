<template>
    <!-- 组件结构 -->
    <div class="school">
        <h2>学校名字：{{name}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <button @click="sendSchoolName">把学校名传给APP</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                name:'清华qinghua',
                schoolAddress:"北京",
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name);
            }
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: orange;
    }
</style>