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

        // 逻辑过多 还可以dome1,dome2这样调用，让dome2去执行
        context.dispatch('dome1',value);
    },
    dome1(context,value){
        context.dispatch('dome2',value);
    },
    dome2(context,value){
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


/* 
    基础使用
        1.初始化数据，配置actions 配置 mutations, 操作文件 store.js
            // 引入vue核心库
            import Vue from "vue"
            // 引入Vuex
            import Vuex from "vuex";
            // 应用插件   因为import会全部提升到前面执行，所以写在这里
            Vue.use(Vuex)

            // 准备actions----用于响应组件的动作
            const actions = {
                // 响应组件中加的动作
                jia(context,value){
                    // console.log(context,value);
                    context.commit('JIA',value)
                }
            };
            // 准备mutations----用于操作数据state
            const mutations ={
                // 执行加
                JIA(state,value){
                    // console.log(state,value);
                    state.sum += value;
                }
            };
            // 准备state----用于存储数据
            const state = {
                // 初始化数据
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
        2、组件中读取vuex中的数据：$store.state.sum
        3、组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据) 或 $store.commit('mutations中的方法名',数据)
        注：若没有网络请求或其他业务逻辑，组件中可以越过actions，即不写dispatch,直接编写commit
*/