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
            component:About,
            // meta属性里面是程序员自己所自定义的信息
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            // meta属性里面是程序员自己所自定义的信息
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    // meta属性里面是程序员自己所自定义的信息
                    meta:{title:'新闻',isAuth:true},
                    // 独享路由：就是某一个路由所单独享用的路由守卫
                    // 独享路由守卫只有这一个-----------------！！！！！没有！！！！后置
                    beforeEnter:(to,from,next)=>{
                        console.log('独享路由守卫',to,from);
                        if(to.meta.isAuth){//这里需要判断是否需要权限
                            if(localStorage.getItem('school') === 'qinghua'){
                                next();//放行
                            }else{
                                alert('学校错误')
                            }
                        }else{
                            next();//放行
                        }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    // meta属性里面是程序员自己所自定义的信息
                    meta:{title:'消息',isAuth:true},
                    children:[
                        {
                            name:'xiangqing',// 命名路由
                            // path:'detail/:id/:title',//params参数  占位
                            path:'detail',  //query
                            component:Detail,
                            // meta属性里面是程序员自己所自定义的信息
                            meta:{title:'详情'},

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

/* // 全局前置路由守卫----每次路由切换之前被调用，初始化的时候被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);//(去哪，从哪来)
    if(to.meta.isAuth){//这里需要判断是否需要权限
        if(localStorage.getItem('school') === 'qinghua'){
            next();//放行
        }else{
            alert('学校错误')
        }
    }else{
        next();//放行
    }
    
}) */

// 全局后置路由守卫---每次路由切换之后被调用，初始化的时候被调用
// 全局后置路由守卫  没有next参数
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);//(去哪，从哪来)
    document.title = to.meta.title
})

// 暴露router
export default router;


/* 
    路由守卫
        1.作用：对路由进行权限控制
        2.分类：全局守卫、独享守卫、组件内守卫
            {
                name:'guanyu',//命名路由
                path:'/about',
                component:About,
                // meta属性里面是程序员自己所自定义的信息
                meta:{title:'关于'}
            }
        3、全局守卫
            // 全局前置路由守卫----每次路由切换之前被调用，初始化的时候被调用
            router.beforeEach((to,from,next)=>{
                console.log('前置路由守卫',to,from);//(去哪，从哪来)
                if(to.meta.isAuth){  //判断当前路由是否需要进行权限控制
                    if(localStorage.getItem('school') === 'qinghua'){  //权限控制的具体规则
                        next();//放行
                    }else{
                        alert('学校错误')
                    }
                }else{
                    next();//放行
                }
                
            })

            // 全局后置路由守卫---每次路由切换之后被调用，初始化的时候被调用
            // 全局后置路由守卫  没有next参数
            router.afterEach((to,from)=>{
                console.log('后置路由守卫',to,from);//(去哪，从哪来)
                if(to.meta.title){
                    document.title = to.meta.title; //修改网页的title
                }else{
                    document.title = 'vue-test'
                }
                
            })
        4、独享路由守卫
            // 独享路由守卫：就是某一个路由所单独享用的路由守卫
            // 独享路由守卫只有这一个-----------------！！！！！没有！！！！后置
            beforeEnter:(to,from,next)=>{
                console.log('独享路由守卫',to,from);
                if(to.meta.isAuth){//这里需要判断是否需要权限
                    if(localStorage.getItem('school') === 'qinghua'){
                        next();//放行
                    }else{
                        alert('学校错误')
                    }
                }else{
                    next();//放行
                }
            }


*/