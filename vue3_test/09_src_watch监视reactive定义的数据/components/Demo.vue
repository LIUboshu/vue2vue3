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
  import {reactive, ref,watch} from 'vue'
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

        // 情况一：监视ref所定义的一个响应式数据
        /* watch(sum,(newValue,oldValue)=>{
          console.log('sum变了',newValue,oldValue);
          // immediate:true,//初始化时就调用一下
        },{immediate:true}) */

        // 情况二：监视ref所定义的多个响应式数据
        /* watch([sum,msg],(newValue,oldValue)=>{
          console.log('sum或msg变了',newValue,oldValue);
          // immediate:true,//初始化时就调用一下
        },{immediate:true}) */

        // 情况三：监视reactive所定义的一个响应式数据  
        // 注意：此处无法正确的获取oldValue   对象类型拿不到oldValue
        // 注意：强制开启了深度监视(deep配置无效)
        watch(person,(newValue,oldValue)=>{
          console.log('person变了',newValue,oldValue)
        },{deep:false}) // 此处的deep配置无效，可以不写

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        /* watch(()=>person.name,(newValue,oldValue)=>{
          console.log('person的name属性变了',newValue,oldValue)
        }) */

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性
        /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
          console.log('person.name属性和person.age属性变了',newValue,oldValue)
        }) */

        // 特殊情况   对象类型拿不到oldValue
        /* watch(()=>person.job,(newValue,oldValue)=>{
          console.log('person.job变了',newValue,oldValue)
        },{deep:true})  //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效 */

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
  watch函数
    与vue2中的watch配置功能一致
    两个小坑
      监视reactive定义的响应式数据时，oldValue无法正确获取，强制开启了深度监视（deep配置失效）
      监视reactive定义的响应式数据中的某个属性时：deep配置有效


      // 情况一：监视ref所定义的一个响应式数据
      watch(sum,(newValue,oldValue)=>{
        console.log('sum变了',newValue,oldValue);
      },{immediate:true})

      // 情况二：监视ref所定义的多个响应式数据
      watch([sum,msg],(newValue,oldValue)=>{
        console.log('sum或msg变了',newValue,oldValue);
      },{immediate:true})

      // 情况三：监视reactive所定义的一个响应式数据  
      // 注意：此处无法正确的获取oldValue   对象类型拿不到oldValue
      // 注意：强制开启了深度监视(deep配置无效)
      watch(person,(newValue,oldValue)=>{
        console.log('person变了',newValue,oldValue)
      },{deep:false}) // 此处的deep配置无效，可以不写


      // 情况四：监视reactive所定义的一个响应式数据中的某个属性
      watch(()=>person.name,(newValue,oldValue)=>{
        console.log('person的name属性变了',newValue,oldValue)
      })

      // 情况五：监视reactive所定义的一个响应式数据中的某些属性
      watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        console.log('person.name属性和person.age属性变了',newValue,oldValue)
      })

      // 特殊情况   对象类型拿不到oldValue
      watch(()=>person.job,(newValue,oldValue)=>{
        console.log('person.job变了',newValue,oldValue)
      },{deep:true})  //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效
*/
</style>