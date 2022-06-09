// vue.config.js是一个可选的配置文件，如果项目的 (和package.json同级的) 根目录中存在这个文件，那么它会被@vue/cli-service自动加载。
// 调整脚手架的工作模式
// 使用vue.config.js可以对脚手架进行个性化定制  详情：https://cli.vuejs.org/zh/config/
module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js'
      }
    },
    // 配置代理 方法一
    //      1.只能配置一个代理
    //      2.不能灵活控制走不走代理（例如：默认public文件夹有students文件，就不会去5000里面找）
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }

    // 配置代理 方法二
    devServer: {
      proxy: {
        '/liuboshu': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/liuboshu':''},//不能丢这个配置，重写路径，匹配所有以liuboshu开头的路径变成 空字符串
          ws: true,//用于支持websocket
          changeOrigin: true  //用于控制请求头中的host值。。。欺骗后台，通过代理服务器获取后台数据
        },
        '/boshu': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/boshu':''},
          ws: true,
          changeOrigin: true
        }
      }
    }
  }


  /* 
      配置代理
          方法一
            在vue.config.js中添加如下配置
              DevServer：{
                proxy: 'http://localhost:5000'
              }
            1.优点：配置简单，请求资源时直接发给点断即可
            2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理
            3.工作方式：若按照上述配置代理，当请求前端不存在的资源师，那么该请求会转发给服务器（优先匹配前端资源）
          方法二
            在vue.config.js中添加如下配置
              devServer: {
                proxy: {
                  '/liuboshu': {  //匹配所有以'/liuboshu'开头请求路径
                    target: 'http://localhost:5000',//代理目标的基础路径
                    pathRewrite:{'^/liuboshu':''},//不能丢这个配置，重写路径，匹配所有以liuboshu开头的路径变成 空字符串
                    ws: true,//用于支持websocket
                    changeOrigin: true  //用于控制请求头中的host值。。。欺骗后台，通过代理服务器获取后台数据
                  },
                  '/boshu': {
                    target: 'http://localhost:5001',
                    pathRewrite:{'^/boshu':''},
                    ws: true,
                    changeOrigin: true
                  }
                }
              }
            1、优点：可以配置多个代理，且可以灵活的控制请求是否走代理
            2、缺点：配置略繁琐，请求资源必须加前缀
  
  
  
  
  */