import React, {Component}from 'react'
import {Redirect} from 'react-router-dom'

class List extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Redirect to="/home"></Redirect>

                <h3>我是list页面</h3>
            </div>
        );
    }
}
 
export default List;