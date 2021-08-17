import {ADD, INPUTVALUE, DELETE} from './actionTypes';

const defaultState = {
    inputValue: '初始值',
    list: ['你好哈哈哈哈哈哈哈', 'dsfssfsdfdsfdsfsdfds', '热热热热热']
}
// 纯函数
export default (state=defaultState, action)=> {
    if (action.type === INPUTVALUE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    console.log(state)
    if (action.type === ADD) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}