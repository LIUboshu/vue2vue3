<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to字符串写法   注意：字符串拼接，模板字符串-->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

                <!-- 跳转路由并携带params参数，to对象写法  params传参必须使用name，不能使用query -->
                <!-- <router-link :to="{
                    name:'xiangqing',   // 这里必须使用name
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }">{{m.title}}</router-link> -->

                <!-- query传递参数 -->
                <router-link :to="{
                    name:'xiangqing',   // 这里必须使用name
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">{{m.title}}</router-link>

                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'}
                ]
            }
        },
        methods: {
            // 编程式导航 push方法
            pushShow(m){
                console.log(this.$router)
                this.$router.push({
                    path:'/home/message/detail',   // 这里必须使用name
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            },
            // 编程式导航 replace方法
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',   // 这里必须使用name
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        },
    }
</script>

<style>
</style>