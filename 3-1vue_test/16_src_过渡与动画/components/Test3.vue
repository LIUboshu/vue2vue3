<template>
    <div>
        <button @click="isShow = !isShow">显示、隐藏</button>
        <!-- 多个元素的过度 -->
        <transition-group 
            appear 
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInLeft"
            leave-active-class="animate__bounceOutRight"    
        >
            <h1 v-show="isShow" key="1">你好啊，多个元素</h1>
            <!-- <h1 v-show="isShow" key="2">你好啊a哈哈哈哈哈哈，多个元素</h1> -->
        </transition-group>
        
    </div>
</template>

<script>
    /* 
        下载安装：npm install animate.css --save
        引入：import 'animate.css'

        <transition-group
            name="animate__animated animate__bounce"
            enter-active-class="动画名字"
            leave-active-class="动画名字" 
        >
            <h1>xxxx</h1>
        </transition-group>
    
    */
    import 'animate.css'
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
h1{
    background-color: orange;
}
</style>