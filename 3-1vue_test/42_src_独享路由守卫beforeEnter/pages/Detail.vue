<template>
    <ul>
        <!-- <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li> -->

        <!-- 第一种写法 -->
        <!-- <li>a:{{a}}</li>
        <li>b:{{b}}</li> -->

        <!-- 第二、三种写法 -->
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        // 第一种写法
        // props:['a','b'],
        // 第二、三种写法
        props:['id','title'],
        // mounted() {
        //     console.log(this);
        // },
    }
</script>

<style>

</style>