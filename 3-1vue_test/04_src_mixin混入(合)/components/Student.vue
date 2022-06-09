<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2 @click="showName">学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    // import {hunhe,hunhe2} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:"男"
            }
        },
        // 局部混合
        // mixins:[hunhe,hunhe2],
        mounted() {
            console.log('Student组件的mounted');
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .student{
        background-color: #ccc;
    }
</style>