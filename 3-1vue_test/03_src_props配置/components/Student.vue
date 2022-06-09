<template>
    <!-- 组件结构 -->
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>学生名字：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="updataAge">点击修改收到的年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name:'Student',
        data() {
            console.log(this);//vc
            return {
                msg:'我一名学生',
                myAge:this.age
            }
        },
        // 第一种 （用的多）
        // props:['name','age','sex'],//简单声明接收


        // 第二种
        // 接收的同时对数据进行类型限制
        /* props:{
            name:String,
            sex:String,
            age:Number
        }, */

        // 第三种 （完整写法  一般用于计算 钱的组件 数量 的时候使用）
        // 接收的同时对数据进行类型限制+ 默认值的指定+ 必要性的限制
        props:{
            name:{
                type:String,//name的类型是字符串
                required:true//name的必要的
            },
            age:{
                type:Number,
                default:99  //默认值是  99
            },
            sex:{
                type:String,
                required:true
            }
        },
        methods: {
            updataAge(){
                this.myAge++
            }
        },
    }
</script>

<style scoped>
    /* 组件的样式 */
    .student{
        background-color: #ccc;
    }
</style>