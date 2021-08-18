import React, { Component } from 'react';
import './index.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Chineses from './workplace/chinese.js'
import Maths from './workplace/math.js'
import English from './workplace/english.js'
import History from './workplace/history.js'
import Videos from './video.js'
class Layout extends Component {
    render() { 
        let routeConfig = [
            {path: '/', title:"语文", exact: true, component:Chineses},
            {path: "/maths", title:"数学", exact: true, component:Maths},
            {path: "/english", title:"英语", exact: true, component:English},
            {path: "/history", title:"历史", exact: true, component:History},
            {path: "/mix", title:"混合", exact: true, component:Videos},
        ]
        return (  
           <Router>
               <div className="main-div">
                    <div className="main-left">
                        <h3>一级导航</h3>
                        <ul>
                            {routeConfig.map((item, index)=> {
                                return (
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="main-right">
                        <h3>这是内容</h3>
                        {routeConfig.map((item, index)=> {
                                return (
                                    <Route path={item.path} exact={item.exact} component={item.component}></Route>
                                )
                            })}
                        
                       
                    </div>
               </div>
           </Router>
        );
    }
}
 
export default Layout;