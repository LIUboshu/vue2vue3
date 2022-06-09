<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <button @click="sum++">点我+1</button>
    <hr>
    <h1>鼠标点击的位置坐标x:{{point.x}}-y:{{point.y}}</h1>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import usePoint from "../hooks/usePoint";
  export default {
    name:'App',
    setup() {
        let sum = ref(0);

        let point = usePoint()

        // 返回对象（常用）
        return {
            sum,
            point
        }
    }
  }
</script>

<style>
/* 
  自定义hook函数
        什么是hook？
            本质是一个函数，把setup函数中使用的Composition API进行封装
        类似vue2中的mixin（混入）
        自定义hook的优势，复用代码，让setup中的逻辑更清楚易懂
*/
</style>