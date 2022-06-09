<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <button @click="sum++">点我+1</button>
    <hr>
    <h1>{{msg}}</h1>
    <button @click="msg+='!'">点我改变msg</button>
  </div>
</template>

<script>
  import {ref,watch} from 'vue'
  export default {
    name:'App',
    setup() {
        let sum = ref(0);
        let msg = ref('你好啊');

        // 情况一：监视ref所定义的一个响应式数据
        /* watch(sum,(newValue,oldValue)=>{
          console.log('sum变了',newValue,oldValue);
          // immediate:true,//初始化时就调用一下
        },{immediate:true}) */

        // 情况二：监视ref所定义的多个响应式数据
        watch([sum,msg],(newValue,oldValue)=>{
          console.log('sum或msg变了',newValue,oldValue);
          // immediate:true,//初始化时就调用一下
        },{immediate:true})
        // 返回对象（常用）
        return {
            sum,
            msg
        }
    }
  }
</script>

<style>
/* 
  
*/
</style>