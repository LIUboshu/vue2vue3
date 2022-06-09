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
  </div>
</template>

<script>
  import {ref,watch} from 'vue'
  export default {
    name:'App',
    setup() {
        let sum = ref(0);
        let msg = ref('你好啊');
        let person = ref({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          }
        })

        // 方法一：ref对象 需要.value
        // watch(person.value,(newValue,oldValue)=>{
        //   console.log('person的值变化了',newValue,oldValue)
        // })

        // 方法二：ref对象深度监视
        watch(person,(newValue,oldValue)=>{
          console.log('person的值变化了',newValue,oldValue)
        },{deep:true})

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
  
*/
</style>