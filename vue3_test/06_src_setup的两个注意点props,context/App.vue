<template>
  <div>
    <Demo @zidingyi='showHelloMsg' msg='你好啊' name='刘波书'>
      <template v-slot:liuboshu>
        <span>刘波书</span>
      </template>
      <template v-slot:haha>
        <span>哈哈</span>
      </template>
    </Demo>
  </div>
</template>

<script>

  import Demo from "./components/Demo.vue";
  export default {
    name:'App',
    components:{Demo},
    setup() {
      function showHelloMsg(value){
        alert(`你好啊，你触发了zidingyi事件，我收到的参数是${value}`);
      }

      return {
        showHelloMsg
      }
    }
  }
</script>

<style>

</style>