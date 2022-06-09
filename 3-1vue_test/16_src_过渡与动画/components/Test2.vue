<template>
    <div>
        <button @click="isShow = !isShow">显示、隐藏</button>

        <!-- 单个元素的过度 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊，单个元素</h1>
        </transition>


        <!-- 多个元素的过度 -->
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊，多个元素</h1>
            <h1 v-show="isShow" key="2">你好啊a哈哈哈哈哈哈，多个元素</h1>
        </transition-group>
        
    </div>
</template>

<script>
    /* 
        Vue封装的过度与动画
            1.作用：在插入、更新或移除DOM元素时，在适合的时候给元素添加样式类名
            2.写法
                元素进入的样式
                    1. v-enter:进入起点
                    2. v-enter-active:进入过程中
                    3. v-enter-to: 进入的终点
                元素离开的样式
                    1. v-leave:离开的起点
                    2. v-leave-active:离开过程中
                    3. v-leave-to:离开的终点
                使用<transition></transition>包裹要过度的元素，并配置name属性
                    <transition name='xxx'>
                        <h1 v-show="isShow">你好啊</h1>
                    </transition>
            3.备注：若有多个元素需要过度，则需要使用：<transition-group>,且每个元素都要指定key值
    */
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

/* 过度效果 */

/* 进入的起点 */
.hello-enter{
    transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to{
    transform: translateX(0);
}
/* 进入和离开的过程中 */
.hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
}
/* 离开的起点 */
.hello-leave{
    transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to{
    transform: translateX(-100%);
}
</style>