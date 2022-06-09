// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 引入store
import store from "./store";

// 关闭vue的生产提示
Vue.config.productionTip = false;


// 创建vue实例vm
new Vue({
  render : h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;////安装全局事件总线
  },
}).$mount('#app');