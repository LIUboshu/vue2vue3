<template>
    <div>
        <h2>Home组件</h2>
    </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy() {
            console.log('Home组件即将销毁')
        },
        mounted() {
            console.log('Home组件挂载完毕',this)
        },
    }
</script>

<style>

</style>