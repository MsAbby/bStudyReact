import React, { Component } from 'react';
import Layout from './page/layout';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
    render() { 
        return (
            <Router>
                <Layout></Layout>
                <Route path="/" component="Layout"></Route>
            </Router>
         );
    }
}
 
export default App;