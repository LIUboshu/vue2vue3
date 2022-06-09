<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:"男"
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .student{
        background-color: #ccc;
    }
</style>