// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false;


console.log(Vue.prototype); // VUE原型上 $on $off $emit

// 创建vue实例vm
new Vue({
  render : h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;//安装全局事件总线
    console.log(this.__proto__);// VUE原型上 $on $off $emit
  }
}).$mount('#app');

/* 
  全局事件总线
    1.一种组件间通信的方式，适用于任意组件间通信
    2.安装全局事件总线
        new Vue({
          .....
          beforeCreate(){
            Vue.prototype.$bus = this;//安装全局事件总线
          },
          .....
        })
    3.使用事件总线
        1.接收数据，
            mounted() {
                this.$bus.$on('hello',(xxx)=>{
                    // 这里必须是箭头函数
                })
            },
        2.提供数据
            this.$bus.$emit('hello',数据);
    4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件
*/