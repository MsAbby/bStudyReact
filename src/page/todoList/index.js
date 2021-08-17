import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {connect} from 'react-redux';
import {ADD, INPUTVALUE, DELETE} from '../../store/actionTypes';

// 无状态组件-不需要constructor 提升性能
const TodoList = (props) => {
    let {inputValue, handelInput, handelAdd, list, handelDelete} = props
    return(
        <div>
            <Input
                style={{width: '300px', margin: '15px'}}
                value={inputValue}
                onChange={handelInput}></Input>
            <Button onClick={handelAdd}>提交</Button>
            <List
                bordered
                dataSource={ list }
                renderItem={(item, index) => (
                    <List.Item onClick={()=>{ handelDelete(index)}}>{item}</List.Item>
                )}>
            </List>
        </div>
    )
}

// 映射
const stateToPrps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// 映射方法
const dispathToProps = (dispath) => {
    return {
        // 输入
        handelInput(e) {
            let action = {
                type: INPUTVALUE,
                value: e.target.value
            }
            dispath(action)
        },
        // 新增
        handelAdd() {
            let action = {
                type: ADD
            }
            dispath(action)
        },
        handelDelete(index) {
            let action = {
                type: DELETE,
                index: index
            }
            dispath(action)
        }
    }
}
// 连接器的映射关系
export default connect(stateToPrps, dispathToProps)(TodoList)