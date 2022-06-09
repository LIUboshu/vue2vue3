// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

// 引入插件
import plugins from './plugins'
// 关闭vue的生产提示
Vue.config.productionTip = false;

// 应用（使用）插件   后面还可以传值
Vue.use(plugins,1,2,3)

// 创建vue实例vm
new Vue({
  render : h => h(App)
}).$mount('#app');