<template>
    <!-- 组件结构 -->
    <div class="school">
        <h2>学校名字：{{name}}</h2>
        <h2>学生名字：{{studentName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'清华qinghua',
                schoolAddress:"北京",
                studentName:''
            }
        },
        mounted() {
            console.log('school',this);
            this.$bus.$on('hello',(data)=>{
                console.log('School组件收到了数据',data)
                this.studentName = data
            })
        },
        beforeDestroy() {
            // 事件总线事件必须解绑    vc组件可以销毁   $bus在原型上不会自动销毁，必须手动解绑
            this.$bus.$off('hello');
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: orange;
    }
</style>