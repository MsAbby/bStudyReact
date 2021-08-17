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
        return (  
           <Router>
               <div className="main-div">
                    <div className="main-left">
                        <h3>一级导航</h3>
                        <ul>
                            <li><Link to="/chinese">语文</Link></li>
                            <li><Link to="/maths">数学</Link></li>
                            <li><Link to="/english">英语</Link></li>
                            <li><Link to="/history">历史</Link></li>
                            <li><Link to="/mix">混合</Link></li>
                        </ul>
                    </div>
                    <div className="main-right">
                        <h3>这是内容</h3>
                        <Route path="/chinese" component={Chineses}></Route>
                        <Route path="/maths" component={Maths}></Route>
                        <Route path="/english" component={English}></Route>
                        <Route path="/history" component={History}></Route>
                        <Route path="/mix" component={Videos}></Route>
                    </div>
               </div>
           </Router>
        );
    }
}
 
export default Layout;