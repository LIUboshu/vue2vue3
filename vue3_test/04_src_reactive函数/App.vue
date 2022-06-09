<template>
  <div>
    <h1>一个人的信息</h1>
    <p>名字：{{person.name}}</p>
    <p>年龄：{{person.age}}</p>
    <p>工作：{{person.job.type}}</p>
    <p>薪资：{{person.job.salary}}</p>
    <p>爱好：{{person.hobby}}</p>
    <p>测试数据C:{{person.job.a.b.c}}</p>
    <button @click="changeInfo">修改人的信息</button>
  </div>
</template>

<script>
  // 引入reactive函数
  import {reactive} from 'vue'
  export default {
    name:'App',
    setup() {
      let person = reactive({
        name:'张三',
        age:18,
        job:{
          type:'前端工程师',
          salary:30,
          a:{
            b:{
              c:666
            }
          }
        },
        hobby:['抽烟','喝酒','烫头']
      })

      // 方法
      function changeInfo(){
        person.name= '李四'
        person.age = 48
        
        person.job.type = 'UI设计师'
        person.job.salary = 40
        person.job.a.b.c = 999

        person.hobby[0] = '学习'
      }
      // 返回对象（常用）
      return {
        person,
        changeInfo
      }
    }
  }
</script>

<style>
/* 
      import {ref,reactive} from 'vue'
      // 数据
      let name = ref('张三');
      let age = ref(18);
      let job = reactive({
        type:'前端工程师',
        salary:30,
        a:{
          b:{
            c:666
          }
        }
      })
      let hobby = reactive(['抽烟','喝酒','烫头']);


      reactive函数
        作用：定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
        语法：const 代理对象 = reactive(源对象) 接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy）
        reactive定义的响应式数据是‘深层次的’
        内部基于ES6的Proxy实现，通过 代理对象 操作 源对象 内部数据进行操作

      reactive对比ref
        从定义数据角度对比
          ref用来定义：基本类型数据
          reactive用来定义：对象（或数组）类型数据
          备注：ref也可以用来定义对象（或数组）类型数据，它内部会自动通过reactive转为代理对象
        从原理角度对比
          ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）
          reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
        从使用角度对比
          ref定义的数据：js操作数据需要.value，读取数据时模板中直接读取不需要.value
          reactive定义的数据：操作数据与读取数据，均不需要.value
          
        例子：
          setup(){
            //数据
            let data = reactive({
              person:{},
              student:{}
            })
          }
*/
</style>