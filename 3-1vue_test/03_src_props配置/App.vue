<template>
    <div>
        <!-- 
            配置项 props
                功能：让组件接收外部传过来的数据
                1.传递数据：
                    <Demo name='xxx'>
                2.接收数据
                    第一种方式（只接收）
                        props:['name']
                    第二种方式（限制类型）
                        props：{
                            name:String
                        }
                    第三种方式（限制类型、限制必要性、指定默认值）
                        props:{
                            name:{
                                type:String,//类型
                                required:true,//必要性
                                default:'默认'//默认值
                            }
                        }
                备注：props是只读的，Vue底层会检测你对props的修改，如果进行了修改，就会发出警告。
                      若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data
                      中的数据
         -->
        <Student name='张三' :age='18' sex='男'/>
        <hr>
        <Student name='李四' :age='19' sex='女'/>
        <hr>
        <Student name='王五' sex='男'/>
    </div>
</template>

<script>
    // 引入school组件
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data() {
            return {
                name:'Vue'
            }
        },
        components:{
            Student
        }
    }
</script>

<style>

</style>