// 该文件专门用于创建整个应用的路由

// 引入VueRouter
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
// 创间路由
const router = new VueRouter({
    routes: [
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
// 暴露router
export default router;



/* 
    vue3   配合  vue-router 4版本使用    目前下载默认版本为4
    vue2   配合  vue-router 3版本使用
    1.安装vue-router命令：cnpm install vue-router@3   vue2需要指定vue-router  3版本
    2.应用插件：Vue.use(VueRouter)
    3.编写router配置项  router/index.js
        //引入VueRouter
        import VueRouter from 'vue-router'
        // 引入路由组件
        import About from "../components/About.vue";
        import Home from "../components/Home.vue";
        // 暴露 并 创建VueRouter实例对象，去管理一组一组的路由规则
        export default new VueRouter({
            routes:[
                {
                    path:'/about',
                    component:About
                },
                {
                    path::'/home',
                    component:Home
                }
            ]
        })
    4.实现切换（active-class可配置高料样式）
        <router-link active-class='active' to='/about'>About</router-link>
    5.指定展示位置
        <router-view></router-view>

    注意点
        1.路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
        2.通过切换，‘隐藏’了的路由组件，默认是被销毁掉的，需要的时候再去挂载
        3.每个组件都有自己的$route属性，里面存储着自己的路由信息
        4.整个应用只有一个router，可以通过组件的$router属性获取到
*/