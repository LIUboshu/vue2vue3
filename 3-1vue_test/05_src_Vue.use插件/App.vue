<template>
    <div>
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
                name:'Vue'
            }
        },
        components:{
            Student,
            School
        }
    }
</script>

<style>

</style>