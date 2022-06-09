<template>
  <div>
    <h1>sum的值:{{sum}}</h1>
    <button @click="sum++">求和为</button>
    <hr>
    <h1>toRefs名字：{{name}}</h1>
    <h1>toRefs年龄：{{age}}</h1>
    <h1>toRefs涨薪：{{job.j1.salary}}K</h1>
    <h1>车的信息：{{person.car}}</h1>
    <button @click="name+='~'">点击更改name</button>
    <button @click="age++">点击更改age</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <hr>
    <button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name+='!'">更改车的名字</button>
    <button @click="person.car.price++">更改车的价格</button>
  </div>
</template>

<script>
  import {toRefs,reactive,ref,toRaw, markRaw} from 'vue'
  export default {
    setup() {
        let person = reactive({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          },
          car:{}
        })
        let sum = ref(0);

        function showRawPerson(){
          // ref类型的不能使用toRaw只有reactive对象才可以使用
          let p = toRaw(person);
          console.log(p);//{name: '张三', age: 18, job: {…}}
        }

        function addCar(){
          let car = {name:'奔驰',price:40};
          person.car = markRaw(car);
        }
        return {
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar
        }
    }
  }
</script>

<style>
/* 
  toRaw与markRaw
    toRaw
        作用：将一个由reactive生成的响应式对象转为普通对象
        使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面的更新
    markRaw
        作用：标记一个对象，使其永远不会再成为响应式对象
        应用场景：
          1.有些值不应被设置为响应式的，例如：复杂的第三方类库等
          2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
*/
</style>