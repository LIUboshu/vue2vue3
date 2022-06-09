<template>
    <div class="Child">
        <h3>我是子组件(子组件不推荐使用inject,子组件使用props) {{name}}--{{price}}</h3>
        <Sun/>
    </div>
</template>

<script>
    import { inject,toRefs } from "vue";
    import Sun from "../components/Sun.vue";
    export default {
        name:'Child',
        components:{Sun},
        setup() {
            let car = inject('car');
            return {
                ...toRefs(car)
            }
        }
    }
</script>

<style scoped>
.Child{
    background-color: pink;
    padding: 10px;
}
</style>