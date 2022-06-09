export default {
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