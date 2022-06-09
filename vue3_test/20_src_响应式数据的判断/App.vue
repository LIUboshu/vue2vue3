<template>
  <div class="app">
    <h3>我是App组件（祖组件）{{name}}---{{price}}</h3>
  </div>
</template>

<script>
  import { isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref, toRefs } from 'vue';
  export default {
    name:'App',
    setup() {
      let car = reactive({name:'奔驰',price:'40W'});
      let sum = ref(0);
      let car2 = readonly(car);

      console.log(isProxy(car));//true
      console.log(isReactive(car));//true
      console.log(isRef(sum));//true
      console.log(isReadonly(car2));//true
      console.log(isProxy(car2));//true

      provide('car',car);
      return {
        ...toRefs(car)
      }
    }
  }
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 10px;
}
/* 
  响应式数据的判断
    - isRef: 检查一个值是否为一个 ref 对象
    - isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
    - isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
    - isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
*/
</style>