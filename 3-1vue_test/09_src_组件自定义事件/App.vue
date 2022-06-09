<template>
    <div>
        <h2>{{msg}}:{{studentName}}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父组件传递数据 -->
        <School :getSchoolName='getSchoolName'/>
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父组件传递数据（第一种写法，使用@或者v-on） -->
        <Student v-on:liuboshu='getStudentName' @demo='m1' @click.native="show"/>
        <!-- once执行一次 -->
        <!-- <Student @liuboshu.once='getStudentName'/> -->
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父组件传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="studen"/> -->
    </div>
</template>

<script>
    /* 
        组件的自定义事件
            1.一种组件间通信的方式：适用于： 子组件==》父组件
            2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
            3.绑定自定义事件
                1.第一种方式：在父组件中<Demo @liuboshu='test'> 或 <Demo v-on:liuboshu='test'>
                2.第二种方式：在父组件中
                    <Demo ref='test'>
                    mounted(){
                        this.$refs.test.$on('liuboshu',this.test)
                    }
                3.若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法
            4.触发自定义事件：this.$emit('liuboshu',数据)
            5.解绑自定义事件：this.$off('liuboshu')
            6.组件上也可以绑定原声DOM事件，需要使用.native修饰符
            7.注意：通过this.$refs.xxx.$on('liuboshu',数据)绑定的自定义事件，回调要么配置在methods中，要么用箭头函数，否则this指向会出现问题！
    
    
    
    
    */
    // 引入school组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        components:{
            Student,
            School
        },
        methods: {
            getSchoolName(name){
                console.log('给App传来了学校名字', name)
            },
            getStudentName(name,...params){
                console.log('给App传来了学生名字', name,params);
                this.studentName = name;
            },
            m1(){
                console.log('demo自定义事件被触发')
            },
            show(){
                alert('组件上使用了原生事件需要+.native')
            }
        },
        mounted() {
            // setTimeout(()=>{
            //     this.$refs.studen.$on('liuboshu',this.getStudentName);//绑定自定义事件
            // },3000)

            /* this.$refs.studen.$on('liuboshu',(name,...params) => {
                // 这里必须使用箭头函数   this问题
                console.log('给App传来了学生名字', name,params);
                this.studentName = name;
            }) */

            // this.$refs.studen.$once('liuboshu',this.getStudentName);//$once执行一次
        },
    }
</script>

<style>
    div{
        background-color: #ccc;
    }
</style>