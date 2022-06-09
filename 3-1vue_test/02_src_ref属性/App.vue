<template>
    <div>
        <!-- 
            ref属性总结：
            1.被用来给元素或子组件注册引用信息（id的替代者）
            2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）
            3.使用方式
                打标识： <h1 ref='xxx'></h1> 或者 <School ref='xxxx'></School>
                获取：  this.$refs.xxx
         -->
        <h2 ref="title">欢迎学习{{name}}</h2>
        <button ref="btn" @click="showDom">点我获取上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    // 引入school组件
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                name:'Vue'
            }
        },
        components:{
            School
        },
        methods: {
            showDom(){
                console.log(this);//vc
                console.log(this.$refs);//{title: h2, btn: button, sch: VueComponent}
                console.log(this.$refs.sch);// school组件的实例对象  vc
                console.log(this.$refs.title);// 真实dom元素
            }
        },
    }
</script>

<style>

</style>