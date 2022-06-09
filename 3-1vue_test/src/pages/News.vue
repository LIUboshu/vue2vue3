<template>
    <ul>
        <li :style="{opacity}">欢迎学习vue</li>
        <li>news001 <input type="text" name="" id=""></li>
        <li>news002 <input type="text" name="" id=""></li>
        <li>news003 <input type="text" name="" id=""></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1
            }
        },
        /* beforeDestroy() {
            console.log('News组件即将被销毁');
            clearInterval(this.timer);//<keep-alive include="News"> 缓存过之后组件不会被销毁  clearInterval不执行
        },
        mounted() {
            this.timer = setInterval(()=>{
                console.log("@");// <keep-alive include="News"> 缓存过之后组件不会被销毁，循环一直在执行
                this.opacity -= 0.5
                if(this.opacity <= 0){
                    this.opacity = 1;
                }
            },500)
        }, */

        activated() {
            console.log('activated',"News组件被激活了");
            this.timer = setInterval(()=>{
                console.log("@");   //activated激活时定时器走   deactivated失活是定时器不走
                this.opacity -= 0.5
                if(this.opacity <= 0){
                    this.opacity = 1;
                }
            },500)
        },
        deactivated() {
            console.log('deactivated',"News组件失活了");
            clearInterval(this.timer);
        },
    }
</script>

<style>
</style>