<template>
  <div>
    <h1>一个人的信息</h1>
    <p>名字：{{name}}</p>
    <p>年龄：{{age}}</p>
    <button @click="sayHello">说话</button>
  </div>
</template>

<script>
  // 引入渲染函数
  // import {h} from 'vue'
  export default {
    name:'App',
    // 此处只是测试一下setup，暂时不考虑响应式的问题
    setup() {
      // 数据
      let name = '张三';
      let age = 18;

      // 方法
      function sayHello(){
        alert(`我叫${name},今年${age}岁了，你好啊`);
      }

      // 第一种  必须返回  此时返回对象（常用）
      return {
        name,
        age,
        sayHello
      }

      // 第二种  返回渲染函数  需要引入h  （了解）
      // return () =>{ return h('h1','刘波书')}
      // return () =>  h('h1','刘波书')   // 简写
    }
  }
</script>

<style>
/* 
  setup
    1、 vue3中一个新的配置项，值为一个函数
    2、 setup是所有Composition API （组合api）'表演舞台'
    3、 组件中所用到的：数据，方法等等，均要配置在setup中
    4、 setup函数的两个返回值
        1、若返回一个对象，则对象中的属性、方法、在模板中均可以直接中使用（重点）
        2、若返回一个渲染函数：则可以自定义渲染内容（了解）
    5、注意点
      1、尽量不要和vue2配置混用
        vue2配置(data,methos,computed...)中可以访问到setup中的属性、方法
        但是在setup中不能访问vue2配置的(data,methos,computed...)
        如果重名，setup优先
      2、setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性
        (后期也可以返回Promise实例，但需要Suspense和异步组件的配合)
*/
</style>