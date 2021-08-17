import React from 'react'
// 路由相关
// Router: 路由器， Route： 线路， Link: 线路
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// 无状态组件1
function Index () {
    return <h3>baidu</h3>
}

function List () {
    return <h3>two</h3>
}

function AppRouter () {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                    <Link to="/list/">列表</Link>
                </li>
            </ul>
            {/* 告诉大家怎么跳转 */}
            <Route path="/" exact component={Index}></Route>
            <Route path="/list" component={List}></Route>
        </Router>
    )
}

export default AppRouter