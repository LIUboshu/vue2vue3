<template>
  <div class="app">
    <h3>我是App组件（祖组件）</h3>
    <Suspense>
      <template v-slot:default>
        <!-- default：默认展示的 -->
        <Child/>
      </template>
      <template v-slot:fallback>
        <!-- fallback：如果加载慢的时候显示的 -->
        <h1>加载中....请稍后...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from "./components/Child.vue";//静态引入组件
  
  import { defineAsyncComponent } from "vue";//异步
  const Child = defineAsyncComponent(()=>import('./components/Child.vue'));//异步引入组件
  export default {
    name:'App',
    components:{Child}
  }
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 10px;
}
/* 
  Suspense
    等待异步组件时渲染一些额外内容，让应用有更好的用户体验
  使用步骤
    异步引入组件
      import { defineAsyncComponent } from "vue";//异步
      const Child = defineAsyncComponent(()=>import('./components/Child.vue'));//异步引入组件
    使用Suspense包裹组件并配置好(default：默认展示的)与(fallback：如果加载慢的时候显示的)
      <template>
        <div class="app">
          <h3>我是App组件（祖组件）</h3>
          <Suspense>
            <template v-slot:default>
              <!-- default：默认展示的 -->
              <Child/>
            </template>
            <template v-slot:fallback>
              <!-- fallback：如果加载慢的时候显示的 -->
              <h1>加载中....请稍后...</h1>
            </template>
          </Suspense>
        </div>
      </template>



  Vue3.0中对这些API做出了调整：

  - 将全局的API，即：```Vue.xxx```调整到应用实例（```app```）上

    | 2.x 全局 API（```Vue```） | 3.x 实例 API (`app`)                        |
    | ------------------------- | ------------------------------------------- |
    | Vue.config.xxxx           | app.config.xxxx                             |
    | Vue.config.productionTip  | 移除
    | Vue.component             | app.component                               |
    | Vue.directive             | app.directive                               |
    | Vue.mixin                 | app.mixin                                   |
    | Vue.use                   | app.use                                     |
    | Vue.prototype             | app.config.globalProperties                 |


  - 过度类名的更改：
        - Vue2.x写法
        
          .v-enter,
          .v-leave-to {
            opacity: 0;
          }
          .v-leave,
          .v-enter-to {
            opacity: 1;
          }
          ```
        - Vue3.x写法

          .v-enter-from,
          .v-leave-to {
            opacity: 0;
          }
          
          .v-leave-from,
          .v-enter-to {
            opacity: 1;
          }
*/
</style>