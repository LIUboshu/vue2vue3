<template>
    <!-- 组件结构 -->
    <div class="school">
        <h2>学校名字：{{name | myslice}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <hr>
        <p v-big2="n">{{n}}</p>
        <button @click="n++">点击n的10倍</button>
        <hr>
        <button @click="text">点我测试hello方法</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'清华qinghua',
                schoolAddress:"北京",
                n:1
            }
        },
        methods: {
            text(){
                this.hello()
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