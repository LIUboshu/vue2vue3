// 该文件用于创建vuex中最为核心的store
// 引入vue核心库
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex";
// 应用插件   因为import会全部提升到前面执行，所以写在这里
Vue.use(Vuex)

// 准备actions----用于响应组件的动作
const actions = {

};
// 准备mutations----用于操作数据state
const mutations ={

};
// 准备state----用于存储数据
const state = {

}

// 创建store
const Store = new Vuex.Store({
    actions,
    mutations,
    state
})
// 暴露store
export default Store;


/* 
    vue2中，要安装vuex的3版本
    vue3中，要安装vuex的4版本

    安装：npm install vuex@3

    1.概念
        在vue中实现集中式状态（数据）管理一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读、写），也是一种组件间通信的方式，且适用于任意组件间通信
    2.何时使用
        多个组件需要共享数据时
    3.搭建vuex环境
        1.创建文件： src/store/index.js
            // 引入vue核心库
            import Vue from "vue"
            // 引入Vuex
            import Vuex from "vuex";
            // 应用插件   因为import会全部提升到前面执行，所以写在这里
            Vue.use(Vuex)

            // 准备actions----用于响应组件的动作
            const actions = {};
            // 准备mutations----用于操作数据state
            const mutations ={};
            // 准备state----用于存储数据
            const state = {}

            // 创建store
            const Store = new Vuex.Store({
                actions,
                mutations,
                state
            })
            // 暴露store
            export default Store;

        2.在main.js中创建vm时传入store配置项
        
            // 引入store
            import store from "./store";
            ....
            // 创建vue实例vm
            new Vue({
                render : h => h(App),
                store,
            }).$mount('#app');

*/