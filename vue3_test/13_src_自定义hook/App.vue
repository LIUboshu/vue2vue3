<template>
  <div>
    <button @click="isShowDemo = !isShowDemo">隐藏/显示</button>
    <Demo v-if="isShowDemo"/>
    <hr>
    <Text/>
  </div>
</template>

<script>
  import { ref } from "vue";
  import Demo from "./components/Demo.vue";
  import Text from "./components/Text.vue";
  export default {
    name:'App',
    components:{Demo,Text},
    setup() {
      let isShowDemo = ref(true);

      return {
        isShowDemo
      }
    }
  }
</script>

<style>

</style>