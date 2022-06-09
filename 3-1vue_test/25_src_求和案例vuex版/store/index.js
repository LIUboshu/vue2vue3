// 该文件用于创建vuex中最为核心的store
// 引入vue核心库
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex";
// 应用插件   因为import会全部提升到前面执行，所以写在这里
Vue.use(Vuex)

// 准备actions----用于响应组件的动作
const actions = {
    /* jia(context,value){
        // console.log(context,value);
        context.commit('JIA',value)
    },
    jian(context,value){
        // console.log(context,value);
        context.commit('JIAN',value)
    }, */
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

// 创建store
const Store = new Vuex.Store({
    actions,
    mutations,
    state
})
// 暴露store
export default Store;