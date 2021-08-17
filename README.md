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
  02 路由： 也是无状态组件
  03 BrowerRouter: 路由器
  04 Route: 线路
  05 Link： 跳转