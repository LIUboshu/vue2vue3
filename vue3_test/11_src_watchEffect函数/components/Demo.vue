<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <button @click="sum++">点我+1</button>
    <hr>
    <h1>{{msg}}</h1>
    <button @click="msg+='!'">点我改变msg</button>
    <hr>
    <h1>名字：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1>涨薪：{{person.job.j1.salary}}K</h1>
    <button @click="person.name+='~'">点击更改name</button>
    <button @click="person.age++">点击更改age</button>
    <button @click="person.job.j1.salary++">涨薪</button>
    <hr>
  </div>
</template>

<script>
  import {reactive, ref, watchEffect} from 'vue'
  export default {
    name:'App',
    setup() {
        let sum = ref(0);
        let msg = ref('你好啊');
        let person = reactive({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          }
        })

        
        /* watch(sum,(newValue,oldValue)=>{
          console.log('sum的值变化了',newValue,oldValue)
        }) */

        watchEffect(()=>{
          let x1 = sum.value;
          let x2 = person.job.j1.salary;
          console.log('watchEffect配置的回调执行了',x1,x2);
        })

        // 返回对象（常用）
        return {
            sum,
            msg,
            person
        }
    }
  }
</script>

<style>
/* 
  watchEffect函数
    watch的套路是：既要指明监视的属性，也要指明监视的回调
    watchEffect的套路是：不用指明监视哪个属性，监视的回调中用哪个属性，那就监视哪个属性
    watchEffect有点像computed:
      但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
      而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值


    //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
      watchEffect(()=>{
        let x1 = sum.value;
        let x2 = person.job.j1.salary;
        console.log('watchEffect配置的回调执行了');
      })
*/
</style>