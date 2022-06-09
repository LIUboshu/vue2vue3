<template>
    <!-- 组件结构 -->
    <div class="student">
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>number的和：{{number}}</h2>
        <button @click="add">点击number+1</button>
        <button @click="sendStudentName">把学生名传给APP</button>
        <button @click="unbind">解绑自定义事件</button>
        <button @click="death">销毁当前Student组件的实例vc</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:"男",
                number:0
            }
        },
        methods: {
            add(){
                console.log('add被调用');
                this.number++
            },
            sendStudentName(){
                // 触发Student组件实例身上的liuboshu事件
                this.$emit('liuboshu', this.name,66,88,99);
                // this.$emit('demo')
            },
            unbind(){
                this.$off('liuboshu');//解绑一个自定义事件
                // this.$off(['liuboshu','demo']);//解绑多个自定义事件
                // this.$off();//解绑所有自定义事件
            },
            death(){
                this.$destroy();//销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全部不奏效
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