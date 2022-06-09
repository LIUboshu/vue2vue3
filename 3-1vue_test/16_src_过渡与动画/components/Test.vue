<template>
    <div>
        <button @click="isShow = !isShow">显示、隐藏</button>
        <transition>
            <h1 v-show="isShow">你好啊</h1>
        </transition>
        <!-- appear刷新过后直接播放动画 -->
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">你好啊</h1>
        </transition>
        
    </div>
</template>

<script>
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

/* 动画效果 */

/* 进入激活 */
.v-enter-active{
    animation: donghua 1s;
}
/* 离开时激活 */
.v-leave-active{
    animation: donghua 1s reverse;
}




/* 进入激活 */
.hello-enter-active{
    animation: donghua 1s;
}
/* 离开时激活 */
.hello-leave-active{
    animation: donghua 1s reverse;
}
@keyframes donghua {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateY(0px);
    }
}
</style>