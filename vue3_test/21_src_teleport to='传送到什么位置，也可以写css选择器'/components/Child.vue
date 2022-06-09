<template>
    <div class="Child">
        <h3>我是子组件</h3>
        <Sun/>
    </div>
</template>

<script>
    import Sun from "../components/Sun.vue";
    export default {
        name:'Child',
        components:{Sun},
    }
</script>

<style scoped>
.Child{
    background-color: pink;
    padding: 10px;
}
</style>