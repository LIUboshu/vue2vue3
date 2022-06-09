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
        mounted() {
            // console.log(this);
        },
    }
</script>

<style>
/* 
    路由的params参数
        1、配置路由，声明接收params参数
            {
                name:'zhuye',
                path:'/home',
                component:Home,
                children:[
                    {
                        name:'xinwen',
                        path:'news',
                        component:News
                    },
                    {
                        name:'xiaoxi',
                        path:'message',
                        component:Message,
                        children:[
                            {
                                name:'xiangqing',// 命名路由
                                path:'detail/:id/:title',//使用占位符声明接收params参数
                                component:Detail
                            }
                        ]
                    },
                ]
            }
        2、传递参数
            <!-- 跳转路由并携带params参数，to字符串写法   注意：字符串拼接，模板字符串-->
            <router-link :to="`/home/message/detail/666/你好`">{{m.title}}</router-link>
            <!-- 跳转路由并携带params参数，to对象写法  params传参必须使用name，不能使用query -->
            <router-link 
                :to="{
                    name:'xiangqing',   // 这里必须使用name
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }"
            >
                {{m.title}}
            </router-link>
            注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置
        3、接收参数
            $route.params.id
            $route.params.title
*/
</style>