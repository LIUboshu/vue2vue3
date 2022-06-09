<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把name传给school组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:"男"
            }
        },
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello',this.name);

                // 发布消息
                pubsub.publish('hello',this.name)
            }
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .student{
        background-color: pink;
    }
</style>