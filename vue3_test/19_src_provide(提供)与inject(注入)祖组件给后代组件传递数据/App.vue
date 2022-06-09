<template>
  <div class="app">
    <h3>我是App组件（祖组件）{{name}}---{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
  import { provide, reactive, toRefs } from 'vue';
  import Child from "./components/Child.vue";
  export default {
    name:'App',
    components:{Child},
    setup() {
      let car = reactive({name:'奔驰',price:'40W'});
      provide('car',car);
      return {
        ...toRefs(car)
      }
    }
  }
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 10px;
}
/* 
  provide(提供)与inject(注入)
    作用：实现祖与后代组件间通信
    套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据
    具体写法：
      祖组件：
        setup() {
          let car = reactive({name:'奔驰',price:'40W'});
          provide('car',car);
          return {
            ...toRefs(car)
          }
        }
      后代组件：
        setup() {
          let car = inject('car');
          console.log(car);//prosy对象
          return {car}
        }



*/
</style>