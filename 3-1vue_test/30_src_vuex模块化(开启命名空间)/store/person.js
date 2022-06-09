import axios from "axios";
import { nanoid } from 'nanoid';
export default{
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
}