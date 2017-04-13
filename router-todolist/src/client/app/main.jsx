import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, Route } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom'

import App from './containers/App'
import reducer from './reducers/index'
//import './index.css';

const loggerMiddleware = createLogger();

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

let rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:filterName" component={App}/>
        </BrowserRouter>
    </Provider>,
    rootElement
);


//<App dispatch={store.dispatch}/>

//<Router>
//    <Route path="/" component={App}/>
//</Router>