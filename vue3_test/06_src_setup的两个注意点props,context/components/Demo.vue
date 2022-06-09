<template>
  <div>
    <h1>一个人的信息</h1>
    <p>名字：{{person.name}}</p>
    <p>年龄：{{person.age}}</p>
    <slot name="liuboshu"></slot>
    <br>
    <button @click="test">测试触发一下Demo组件的zidingyi事件</button>
  </div>
</template>

<script>
  // 引入reactive函数
  import {reactive} from 'vue'
  export default {
    name:'App',
    props:['msg','name'],
    // emits:['zidingyi'],//出现警告，需要引入要用的自定义事件
    beforeCreate() {
        // console.log('-----beforeCreate------');
    },
    setup(props,context) {
        // console.log('------setup------',this);//------setup比beforeCreate先执行------这里的this是undefined
        console.log('------setup(第一个参数)------',props);
        console.log('------setup(第二个参数)------',context);
        // console.log('------setup(第二个参数)------',context.emit);//触发自定义事件
        // console.log('------setup(第二个参数)------',context.attrs);//相当于vue2中的$attrs
        console.log('------setup(第二个参数)------',context.slots);//插槽
        let person = reactive({
            name:'张三',
            age:18
        })

        // 方法
        function test(){
            context.emit('zidingyi',666);
            console.log(context.slots)
        }
        // 返回对象（常用）
        return {
            person,
            test
        }
    }
  }
</script>

<style>
/* 
  setup()的两个注意点
    setup执行的时机
      在beforeCreate之前执行一次，this是undefined
    setup的参数
      props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
      context:上下文对象
          attrs:值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs
          slots:收到的插槽内容，相当于this.$slots
          emit:分发自定义事件的函数，相当于this.$emit
*/
</style>