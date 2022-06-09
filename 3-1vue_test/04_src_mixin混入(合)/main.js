// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 引入混合
import {hunhe,hunhe2} from './mixin'
// 关闭vue的生产提示
Vue.config.productionTip = false;
// 全局混合
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

// 创建vue实例vm
new Vue({
  render : h => h(App)
}).$mount('#app');