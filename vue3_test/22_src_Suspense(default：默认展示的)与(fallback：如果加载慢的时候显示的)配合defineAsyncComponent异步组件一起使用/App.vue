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
*/
</style>