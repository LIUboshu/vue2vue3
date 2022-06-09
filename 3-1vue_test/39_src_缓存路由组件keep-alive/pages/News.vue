<template>
    <ul>
        <li>news001 <input type="text" name="" id=""></li>
        <li>news002 <input type="text" name="" id=""></li>
        <li>news003 <input type="text" name="" id=""></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        beforeDestroy() {
            console.log('News组件即将被销毁')
        },
    }
</script>

<style>

</style>