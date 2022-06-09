<template>
    <div class="sun">
        <h3>我是后代组件</h3>
        <Dialog/>
    </div>
</template>

<script>
    import Dialog from "./Dialog.vue";
    export default {
        name:'Sun',
        components:{Dialog}
    }
</script>

<style scoped>
.sun{
    background-color: seagreen;
    padding: 10px;
}

</style>