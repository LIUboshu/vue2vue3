<template>
    <div class="Child">
        <h3>我是子组件</h3>
        {{sum}}
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        name:'Child',
        async setup() {
            let sum = ref(0);
            let p =new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve({sum});
                },3000)
            })
            return await p
        }
    }
</script>

<style scoped>
.Child{
    background-color: pink;
    padding: 10px;
}
</style>