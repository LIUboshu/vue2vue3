<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <button @click="sum++">点我+1</button>
  </div>
</template>

<script>
  // 引入组合式API生命周期钩子
  import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'
  export default {
    name:'App',
    setup() {
        console.log('---setup---')
        let sum = ref(0);

        // 通过组合式API的形式去使用生命周期钩子 （最好只用组合式API使用生命周期钩子，不要重复，这里只是为了演示组合式API要比配置项的形式先执行）
        onBeforeMount(()=>{
          console.log('---onBeforeMount---')
        }),
        onMounted(()=>{
          console.log('---onMounted---')
        }),
        onBeforeUpdate(()=>{
          console.log('---onBeforeUpdate---')
        }),
        onUpdated(()=>{
          console.log('---onUpdated---')
        }),
        onBeforeUnmount(()=>{
          console.log('---onBeforeUnmount---')
        }),
        onUnmounted(()=>{
          console.log('---onUnmounted---')
        })

        // 返回对象（常用）
        return {
            sum
        }
    },
    // 通过配置项的形式使用声明周期钩子
    beforeCreate() {
      console.log('---beforeCreate---')
    },
    created() {
      console.log('---created---')
    },
    beforeMount() {
      console.log('---beforeMount---')
    },
    mounted () {
      console.log('---mounted---')
    },
    beforeUpdate() {
      console.log('---beforeUpdate---')
    },
    updated () {
      console.log('---updated---')
    },
    beforeUnmount() {
      console.log('---beforeUnmount---')
    },
    unmounted() {
      console.log('---unmounted---')
    }
  }
</script>

<style>
/* 
  Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
    ```beforeDestroy```改名为 ```beforeUnmount```
    ```destroyed```改名为 ```unmounted```
  Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
    `beforeCreate`===>`setup()`
    `created`=======>`setup()`
    `beforeMount` ===>`onBeforeMount`
    `mounted`=======>`onMounted`
    `beforeUpdate`===>`onBeforeUpdate`
    `updated` =======>`onUpdated`
    `beforeUnmount`==>`onBeforeUnmount`
    `unmounted` =====>`onUnmounted`

*/
</style>