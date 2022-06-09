<template>
  <div>
    <h1>一个人的信息</h1>
    <p>名字：{{name}}</p>
    <p>年龄：{{age}}</p>
    <p>工作：{{job.type}}</p>
    <p>薪资：{{job.salary}}</p>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
  // 引入ref函数
  import {ref} from 'vue'
  export default {
    name:'App',
    setup() {
      // 数据
      let name = ref('张三');
      let age = ref(18);
      let job = ref({
        type:'前端工程师',
        salary:30
      })

      // 方法
      function changeInfo(){
        name.value = '李四'
        age.value = 48
        
        job.value.type = 'UI设计师'
        job.value.salary = 40
        console.log(job.value);//返回Proxy{type: '前端工程师', salary: 30}
        // console.log(name,age);//RefImpl{...value: 18}------RefImpl-引用实现对象
      }
      // 返回对象（常用）
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
  }
</script>

<style>
/* 
  ref函数
    1、作用：定义一个响应式的数据
    2、语法：const xxx = ref(initValue)
      创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
      js中操作数据：xxx.value = 赋值
      模板中读取数据，不要.value 直接<p>名字：{{name}}</p>
    3、备注
      接收的数据可以是：基本类型、也可以是对象类型
      基本类型的数据：响应式依然是靠Object.defineProperty()的get和set完成的
      对象类型的数据：内部求助了vue3中的一个新的函数----reactive函数
*/
</style>