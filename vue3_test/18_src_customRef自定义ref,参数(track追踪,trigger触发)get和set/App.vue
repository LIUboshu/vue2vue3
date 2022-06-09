<template>
  <div>
    <input type="text" v-model="keyWord">
    <h4>{{keyWord}}</h4>
  </div>
</template>

<script>
  import { customRef } from "vue";
  export default {
    name:'App',
    setup() {
      // let keyWord = ref('hello');
      // 自定义一个ref名为：myRef
      function myRef(value){
        let timer;
        // 返回自定义ref  customRef((追踪,触发)=>{return{get(){},set(){}}})
        return customRef((track, trigger)=>{
          return {
            get(){
              console.log('get获取了数据',value)
              track();//追踪
              // 通知vue追踪value的变化，提前和get商量一下，让他认为这个value是有用的
              return value
            },
            set(newValue){
              console.log('set修改了数据',newValue);
              clearTimeout(timer);
              // 自定义ref，停1S后执行 
              timer = setTimeout(()=>{
                value = newValue;
                trigger();//触发
                // 通知vue去重新解析模板
              },1000)
            }
          }
        })
      }

      let keyWord = myRef('hello');

      return {
        keyWord
      }
    }
  }
</script>

<style>
/* 
  customRef
    作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制
    实现防抖
      <template>
        <input type="text" v-model="keyword">
        <h3>{{keyword}}</h3>
      </template>
      
      <script>
        import {ref,customRef} from 'vue'
        export default {
          name:'Demo',
          setup(){
            // let keyword = ref('hello') //使用Vue准备好的内置ref
            //自定义一个myRef
            function myRef(value,delay){
              let timer
              //通过customRef去实现自定义
              return customRef((track,trigger)=>{
                return{
                  get(){
                    track() //告诉Vue这个value值是需要被“追踪”的
                    return value
                  },
                  set(newValue){
                    clearTimeout(timer)
                    timer = setTimeout(()=>{
                      value = newValue
                      trigger() //告诉Vue去更新界面
                    },delay)
                  }
                }
              })
            }
            let keyword = myRef('hello',500) //使用程序员自定义的ref
            return {
              keyword
            }
          }
        }
      </script>


*/
</style>