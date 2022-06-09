<template>
  <div>
    <h1>一个人的信息</h1>
    <br>
    <input type="text" v-model="person.firstName">
    <br>
    <input type="text" v-model="person.lastName">
    <br>
    <p>全名：{{person.fullName}}</p>
    <br>
    <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
  // 引入reactive函数
  import {reactive,computed} from 'vue'
  export default {
    name:'App',
    setup() {
        let person = reactive({
            firstName:'张',
            lastName:'三'
        })

        // 计算属性  简写(没有考虑计算属性被修改的情况)
        /* person.fullName = computed(()=>{
          return person.firstName + "-" + person.lastName
        }) */

        // 计算属性-完整写法（考虑读和写）
        person.fullName = computed({
          get(){
            return person.firstName + "-" + person.lastName
          },
          set(value){
            let arrName = value.split('-');
            person.firstName = arrName[0];
            person.lastName = arrName[1];
          }
        })

        // 返回对象（常用）
        return {
            person
        }
    }
  }
</script>

<style>
/* 
  computed函数
    与vue2中computed配置功能一致
    
    写法：
      import {computed} from 'vue'
      setup(){
        // 计算属性简写
        let fullName = computed(()=>{
          return person.firstName + "-" + person.lastName
        })
        // 计算属性--完整
        let fullName = computed({
          get(){
            return person.firstName + "-" + person.lastName
          },
          set(value){
            let arrName = value.split('-');
            person.firstName = arrName[0];
            person.lastName = arrName[1];
          }
        })
      }
*/
</style>