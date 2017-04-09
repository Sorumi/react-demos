import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './containers/App'
import reducer from './reducers/index'
import './index.css';

const loggerMiddleware = createLogger();

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
);

let rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App dispatch={store.dispatch}/>
    </Provider>,
    rootElement
);
