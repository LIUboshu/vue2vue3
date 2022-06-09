<template>
    <!-- 组件结构 -->
    <div class="school">
        <h2 @click="showName">学校名字：{{name}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <h2>x的值:{{x}}</h2>
        <h2>y的值:{{y}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    // import {hunhe,hunhe2} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:'清华',
                schoolAddress:"北京",
                x:666
            }
        },
        // 局部混合
        // mixins:[hunhe,hunhe2],
        mounted() {
            console.log('school组件的mounted');
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: orange;
    }
</style>