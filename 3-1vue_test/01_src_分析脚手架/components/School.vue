<template>
    <!-- 组件结构 -->
    <div id="school">
        <h2>学校名字：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <button @click='showName'>点我提示学校名字</button>
        <student></student>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    import student from './Student.vue'
    export default {
        data() {
            return {
                schoolName:'清华',
                schoolAddress:'北京'
            }
        },
        methods: {
            showName(){
                alert(this.schoolName);
            }
        },
        components: {
            student
        }
    }
</script>

<style>
    /* 组件的样式 */
    #school {
        background-color: yellow;
    }
</style>