import React, { Component } from 'react'
import FilterFooter from './FilterFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


import { fetchProduct } from '../actions/index'

class App extends Component {


    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchProduct("111"))
    }

    render() {
        return (<div>
            <AddTodo />
            <VisibleTodoList />
            <FilterFooter />
        </div>);
    }
}


export default App
