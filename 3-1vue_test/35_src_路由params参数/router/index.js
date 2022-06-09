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
                            path:'detail/:id/:title',//params参数  占位
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