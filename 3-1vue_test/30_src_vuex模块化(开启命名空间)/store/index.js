// 该文件用于创建vuex中最为核心的store
// 引入vue核心库
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex";

// import axios from "axios";
// import { nanoid } from 'nanoid';

// 应用插件   因为import会全部提升到前面执行，所以写在这里
Vue.use(Vuex)

import countOptions from "./count.js";
import personOptions from "./person.js";

/* // 求和相关的配置
const countOptions = {
    namespaced: true,//命名空间
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            // console.log(state,value);
            state.sum += value;
        },
        JIAN(state,value){
            // console.log(state,value);
            state.sum -= value;
        }
    },
    state:{
        sum:0,
        city:'北京',
        school:'北大'
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

// 人员管理相关配置
const personOptions = {
    namespaced: true,//命名空间
    actions:{
        addPersonWang(context,value){
            console.log(context,value)
            if(value.name.indexOf('王') === 0){
                context.commit('PERSONODD',value);
            }else{
                alert('必须添加一个姓王的人');
            }
        },
        addPersonServer(context){
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response =>{
                    // console.log('请求成功',response.data);
                    const personObj = {id:nanoid(),name:response.data};
                    context.commit('PERSONODD',personObj);
                },
                error =>{
                    console.log('请求失败',error.message);
                }
            )
        }
    },
    mutations:{
        PERSONODD(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
} */


// 创建store
const Store = new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
// 暴露store
export default Store;


/* 
    模块化+命名空间
        1.目的：让代码更好维护，让多种数据分类更加明确
        2.修改store.js
            const countOptions = {
                namespaced: true,//开启命名空间
                actions:{...},
                mutations:{...},
                state:{sum:0},
                getters:{
                    bigSum(state){
                        return state.sum * 10
                    }
                }
            }

            const personOptions = {
                namespaced: true,//开启命名空间
                actions:{...},
                mutations:{...},
                state:{...},
                getters:{...}
            }

            export default new Vuex.Store({
                modules:{
                    countAbout:countOptions,
                    personAbout:personOptions

                    // 也可写简写形式，简写后都要修改
                    // countOptions,
                    // personOptions
                }
            })
        3.开启命名空间后，组件中读取state数据
            // 方式一：自己直接读取
            this.$store.state.personAbout.personList
            // 方式二：借助mapState读取
            ...mapState('countAbout',['sum','city','school'])
        4.开启命名空间后，组件读取getters数据
            // 方式一：自己直接读取
            this.$store.getters['personAbout/firstPersonName']
            // 方式二：借助mapGetters读取
            ...mapGetters('countAbout',['bigSum'])
        5.开启命名空间后，组件中调用dispatch
            // 方式一：自己直接dispatch
            this.$store.dispatch('personAbout/addPersonWang', personObj)
            // 方式二：借助mapActions
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        6.开启命名空间后，组件中调用commit
            // 方式一：自己直接commit
            this.$store.commit('personAbout/PERSONODD', personObj)
            // 方式二：借助mapMutations
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
            
*/  