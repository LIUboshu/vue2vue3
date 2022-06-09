// 该文件用于创建vuex中最为核心的store
// 引入vue核心库
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex";
// 应用插件   因为import会全部提升到前面执行，所以写在这里
Vue.use(Vuex)

// 准备actions----用于响应组件的动作
const actions = {
    jiaOdd(context,value){
        // console.log(context,value);
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }
};
// 准备mutations----用于操作数据state
const mutations ={
    JIA(state,value){
        // console.log(state,value);
        state.sum += value;
    },
    JIAN(state,value){
        // console.log(state,value);
        state.sum -= value;
    },
};
// 准备state----用于存储数据
const state = {
    sum:0
}
// 准备getters----用于将state中的数据进行加工   相当于计算属性
const getters = {
    // 这里的函数接收的参数是：state    返回的结果可以在任意组件中使用
    bigSum(state){
        return state.sum * 10
    }
}


// 创建store
const Store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters     //配置getters
})
// 暴露store
export default Store;

/* 
    getters的使用
        1.概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
          如果计算的逻辑复杂，并且逻辑还想复用推荐使用getters
        2.在state.js中追加getters配置
            const getters = {
                // 这里的函数接收的参数是：state    返回的结果可以在任意组件中使用
                bigSum(state){
                    return state.sum * 10
                }
            }

            // 创建并暴露store
            export default new Vuex.Store({
                ....
                getters
            })
        3.组件中读取数据：$store.getters.bigSum

*/