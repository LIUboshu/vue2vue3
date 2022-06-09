export default{
    install(Vue,x,y,z){
        console.log(Vue,x,y,z);// vue  1 2 3
        // 全局过滤器  默认收到value
        Vue.filter('myslice',function(value){
            return value.slice(0,4)
        });
        // 全局指令 函数
        Vue.directive('big2',function(element,binding){element.innerText = binding.value * 10});
        // 混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            }
        });

        // vue的原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert('你好')
        }
    }
}

/* 
        Vue.use()  功能：
            本质：包含install方法的一个对象，install的第一个参数是Vue，第二个参数以后是插件使用者传递的参数
            定义组件：
                对象.install = function (vue,options){
                    //1.过滤器

                    //2.全局指令

                }
            使用插件
                Vue.use()
*/