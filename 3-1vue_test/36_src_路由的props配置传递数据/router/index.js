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
                            // path:'detail/:id/:title',//params参数  占位
                            path:'detail',  //query
                            component:Detail,
                            // 谁接收数据在哪写props
                            
                            // props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给Detail组件(数据固定，不常用)
                            // props:{a:1,b:'hello'}
                            
                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            // props的第三种写法，值为函数,就会把该路由组件收到的所有query参数  接收到的参数是$router
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
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
    路由的props配置
        作用：让路由组件更方便的收到参数
        {
            name:'xiangqing',
            path:'detail/:id',
            component:Detail,
            // 第一种写法，props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
            props:{a:100,b:'你好'}
            // 第二种写法，props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
            props:true,
            // 第三种写法，props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
            props($route){
                return {
                    id:$route.query.id,
                    title:$route.query.title
                }
            }
        }


*/