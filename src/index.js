import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './page/AppRouter';

// // 01 react-redux

// import TodoList from './page/todoList/index.js'
// import {Provider} from 'react-redux' // react-redux
// import store from './store'

// const App = (
//   <Provider store={store}>
//     <TodoList/>
//   </Provider>
// )
// ReactDOM.render(App, document.getElementById('root'));

// // 02 react-router-dom
ReactDOM.render(<AppRouter/>,document.getElementById('root'))
