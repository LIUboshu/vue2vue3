<template>
  <div>
    <h1>sum的值:{{sum}}</h1>
    <button @click="sum++">求和为</button>
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
  import {toRefs,reactive,ref,shallowReadonly,readonly} from 'vue'
  export default {
    setup() {
        let person = reactive({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          }
        })

        // person = readonly(person);//都不能修改
        person = shallowReadonly(person);//第一层不能修改，深层次的可以修改

        let sum = ref(0);
        sum = readonly(sum);
        // sum = shallowReadonly(sum);//这种没有必要
        return {
            sum,
            ...toRefs(person)
        }
    }
  }
</script>

<style>
/* 
  readonly和shallowReadonly
    readonly:让一个响应式数据变为只读的（深只读）;
    shallowReadonly:让一个响应式数据变为只读的（浅只读）;
    应用场景：不希望数据被修改时
*/
</style>