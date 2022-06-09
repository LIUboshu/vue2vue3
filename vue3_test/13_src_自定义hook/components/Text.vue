<template>
    <div>
        <h1>展示鼠标坐标x:{{point.x}}-y:{{point.y}}</h1>
    </div>
</template>

<script>
    import usePoint from "../hooks/usePoint";
    export default {
        name:'Text',
        setup() {
            let point = usePoint();


            return {point}
        }
    }
</script>

<style>

</style>