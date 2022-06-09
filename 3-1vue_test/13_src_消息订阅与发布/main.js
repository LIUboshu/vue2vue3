// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false;


console.log(Vue.prototype); // VUE原型上 $on $off $emit

// 创建vue实例vm
new Vue({
  render : h => h(App)
}).$mount('#app');