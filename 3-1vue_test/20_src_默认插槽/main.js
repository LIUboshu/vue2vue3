// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 引入vue-resource插件
import vueResource from 'vue-resource'
// 关闭vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource)

// 创建vue实例vm
new Vue({
  render : h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;////安装全局事件总线
  },
}).$mount('#app');

// cnpm view webpack versions   查看所有webpack版本
// npm view less-loader versions  查看所有less-loader版本
// 结合webpack  安装了 cnpm install less-loader@7版本