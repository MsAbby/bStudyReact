import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: [
                {cid: 1, title: '文章1'},
                {cid: 2, title: '文章2'},
                {cid: 3, title: '文章3'},
                {cid: 4, title: '文章4'}
            ]
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() { 
        return (  
            <div>
                <h2>item页面</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return(
                                <li key={index}><Link to={'/list/' + item.cid}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Item;