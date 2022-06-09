<template>
    <!-- 组件结构 -->
    <div>
        <school></school>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    // 引入组件
    import school from './components/School.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            school
        }
    }
</script>

<style>
    /* 组件的样式 */


    /* 
        vue-cli
            第一步（仅第一次执行）：全局安装@vue-cli
                npm install -g @vue/cli
            第二步：切换你要创建项目的目录，然后使用命令创建项目
                npm create 项目名
            第三步：启动项目
                npm run serve
    */
</style>