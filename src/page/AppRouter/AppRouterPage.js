import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import List from './List'
import Item from './Item'
import Home from './home'

class AppRouterPage extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <div><Link to="/">页面1</Link></div>
                <div><Link to="/item">页面2</Link></div>
                <Route path="/" exact component={List}></Route>
                <Route path="/item" component={Item}></Route>
                <Route path="/home" component={Home}></Route>
            </Router>
         );
    }
}
 
export default AppRouterPage;