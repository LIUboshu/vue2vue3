<template>
    <div>
        <h2>{{msg}}</h2>
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>
    // 引入school组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        components:{
            Student,
            School
        }
    }
</script>

<style>
    div{
        background-color: #ccc;
    }
</style>