<template>
    <div>
        <button @click="isShow = true">点我弹框</button>
        <!-- <teleport to='传送到什么位置，也可以写css选择器'> -->
        <teleport to='body'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一个弹框</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="isShow = false">关闭弹框</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        name:'Dialog',
        setup() {
            let isShow = ref(false);
            return{
                isShow
            }
        }
    }
</script>

<style scoped>
.mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.dialog{
    width: 300px;
    height: 300px;
    background-color: green;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
/* 
    teleport
        是一种能够将我们的组件html结构移动到指定位置的技术
    代码
        <teleport to='移动位置'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是一个弹框</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="isShow = false">关闭弹框</button>
                </div>
            </div>
        </teleport>



*/
</style>