// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象---app（类似于之前Vue2中的vm,但是app比vm更轻）
const app = createApp(App);
// 挂载
app.mount('#app')
