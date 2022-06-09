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
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
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



*/