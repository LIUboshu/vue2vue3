<template>
    <!-- 组件结构 -->
    <div>
        <h2>学生名字：{{studentName}}</h2>
        <h2>学生年龄：{{studentAge}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        data() {
            return {
                studentName:'张三',
                studentAge:18
            }
        }
    }
</script>

<style>
    /* 组件的样式 */

</style>