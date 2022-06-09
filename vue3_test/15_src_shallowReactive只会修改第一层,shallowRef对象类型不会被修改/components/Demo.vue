<template>
  <div>
    <h1>x的值:{{x}}</h1>
    <button @click="x++">点击按钮x加1</button>
    <h1>y.y的值:{{y.y}}</h1>
    <button @click="y.y++">点击按钮更改数据</button>
    <h1>{{person}}</h1>
    <hr>
    <h1>toRefs名字：{{name}}</h1>
    <h1>toRefs年龄：{{age}}</h1>
    <h1>toRefs涨薪：{{job.j1.salary}}K</h1>
    <button @click="name+='~'">点击更改name</button>
    <button @click="age++">点击更改age</button>
    <button @click="job.j1.salary++">涨薪</button>
    <hr>
  </div>
</template>

<script>
  import {toRefs,shallowReactive,shallowRef} from 'vue'
  export default {
    setup() {
        let person = shallowReactive({//只考虑第一层数据的响应式
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20,//这里不会被修改
            }
          }
        })

        let x = shallowRef(0);//可以修改
        let y = shallowRef({
          y:0,//不能检测到对象里面的，这里是object不是proxy对象
        })
        console.log(y)
        
        return {
            x,
            y,
            person,
            ...toRefs(person)//toRefs(person)返回一个对象，对象里面嵌套对象会有语法错误，这里必须解构
        }
    }
  }
</script>

<style>
/* 
  shallowReactive与shallowRef
    shallowReactive:只处理对象最外层属性的响应式（浅响应）
    shallowRef:只处理基本数据类型响应式，不进行对象的响应式处理
    什么时候使用？
      如果有一个对象数据，结构比较深，但变化时只是外层属性变化----》shallowReactive
      如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换---》shallowRef
*/
</style>