// 该文件专门用于创建整个应用的路由

// 引入VueRouter
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from '../pages/News.vue';
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
// 创间路由
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',//命名路由
            path:'/about',
            component:About
        },
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
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
            ]
        }
    ]
})
// 暴露router
export default router;


/* 
    多级路由、嵌套路由
        1、配置路由规则，使用children配置项：
            routes: [
                {
                    path:'/about',
                    component:About
                },
                {
                    path:'/home',
                    component:Home,
                    children:[  // 通过children配置子路由
                        {
                            path:'news',    // 此处一定不要写 / 
                            component:News
                        },
                        {
                            path:'message',  // 此处一定不要写 / 
                            component:Message
                        },
                    ]
                }
            ]
        2、跳转（要写完整路径）
            <router-link to='/home/news'>News</router-link>

    命名路由
        1、作用可以简化路由的跳转
        2、如果使用
            {
                path:'/demo',
                component:Demo,
                children:[
                    {
                        path:'test',
                        component:Test,
                        children:[
                            name:'hello',//给路由命名
                            path:'welcome',
                            component:Hello,
                        ]
                    },
                ]
            }

            简化跳转
            // 简化前
            <router-link to="/demo/test/welcome">跳转</router-link>
            // 简化后
            <router-link :to="{name:'hello'}">跳转</router-link>
            // 简化后 写法配合 传递参数
            <router-link :to="{
                name:'hello',
                query:{
                    id:666,
                    title:'你好'，
                    key:value
                    // query携带参数
                }
            }">跳转</router-link>

*/