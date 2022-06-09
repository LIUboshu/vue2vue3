// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 引入vueRouter
import VueRouter from "vue-router";
// 引入路由
import router from "./router/index";
// 关闭vue的生产提示
Vue.config.productionTip = false;

//应用vueRouter插件
Vue.use(VueRouter);


// 创建vue实例vm
new Vue({
  render : h => h(App),
  router,//配置router
  beforeCreate() {
    Vue.prototype.$bus = this;////安装全局事件总线
  },
}).$mount('#app');