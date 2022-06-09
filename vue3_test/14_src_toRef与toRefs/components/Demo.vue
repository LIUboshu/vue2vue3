<template>
  <div>
    <h1>{{person}}</h1>
    <hr>
    <h1>toRef名字：{{name2}}</h1>
    <h1>toRef年龄：{{age}}</h1>
    <h1>toRef涨薪：{{salary}}K</h1>
    
    <button @click="name2+='~'">点击更改name</button>
    <button @click="age++">点击更改age</button>
    <button @click="salary++">涨薪</button>
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
  import {reactive,toRef,toRefs} from 'vue'
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
        let name1 = person.name;
        console.log(name1);//这里是字符串  “张三”
        let name2 = toRef(person,'name');
        console.log(name2);//这里是ObjectRefImpl{_object: Proxy, _key: 'name', _defaultValue: undefined, __v_isRef: true}
        // 返回对象（常用）
        let x = toRefs(person);
        console.log(x);//{name: ObjectRefImpl, age: ObjectRefImpl, job: ObjectRefImpl}
        return {
            person,
            name2:toRef(person,'name'),
            age:toRef(person,'age'),
            salary:toRef(person.job.j1,"salary"),

            ...toRefs(person)//toRefs(person)返回一个对象，对象里面嵌套对象会有语法错误，这里必须解构
        }
    }
  }
</script>

<style>
/* 
  toRef
    作用：创建一个ref对象，其value值指向另一个对象中的某个属性
    语法：let name = roRef(person,'name')
    应用：要将响应式对象中的某个属性单独提供给外部使用时
  toRefs
    扩展：toRef与toRefs功能一致，但可以批量创建多个ref对象，语法：toRefs(person)
*/
</style>