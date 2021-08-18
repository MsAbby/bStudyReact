
import React, { Component } from 'react';
import './index.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Chineses from './workplace/chinese.js'
import Maths from './workplace/math.js'
import Mondy from './workplace/monday.js'

class Videos extends Component {
    render() { 
        return (  
           <Router>
               <div>
                    <ul style={{display: 'flex',background: 'pink'}}>
                        <li style={{marginRight: '30px'}}><Link to="/mix/chinese">语文1</Link></li>
                        <li><Link to="/mix/maths">数学2</Link></li>
                        <li><Link to="/mix/monday">星期一</Link></li>
                    </ul>
                    <div>
                        <Route path="/mix/chinese" component={Chineses}></Route>
                        <Route path="/mix/maths" component={Maths}></Route>
                        <Route path="/mix/monday" component={Mondy}></Route>
                    </div>
               </div>
           </Router>
        );
    }
}
 
export default Videos;