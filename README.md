## redux和react-redux 区别？
01 依赖： react-redux依赖redux <br>
02 react-redux 好处01： 把有状态组件变成无状态组件<br>
02 react-redux 好处02： 拆分方法，对于大型项目复用性越高

## react-redux
01 安装： npm i -S react-redux<br>

  ### step1: 提供器 provider 
  00 引入位置： 入口文件index.js<br>
  01 引入： <br>
  ````
    import {Provider} from 'react-redux'
    import store from './store'
    <Provider store={store}></Provider>

  ````
    02 只要被包裹就可以访问 store<br>
    03 包裹要使用的组件

  ### step2: 连接器 connect
  00 引入位置： 组件中
  02 映射： 把state 映射出props属性

  ### 派发action




  ## react-router 路由
  01 安装： npm i -S react-router-dom <br>
  02 路由： 也是无状态组件<br>
  03 BrowerRouter: 路由器<br>
  04 Route: 线路<br>
  05 Link： 跳转<br>
  06 ReactRouter精确匹配和页面分离： exact 精确匹配 <br>

  ## react-router 路由-动态传值
  01 动态传值定义： /list/:id

  ## react-router 路由重定向redirect
  01 基本跳转和重定向区别： 重定向不可前进后退
  02 编程式重定向： this.props.history.push('/home')

  ## redirect-router 嵌套路由
  01 什么是嵌套路由： 一级二级路由（中台系统）

  ## 后台动态获取路由进行配置
  01 方案： 遍历
  
  
