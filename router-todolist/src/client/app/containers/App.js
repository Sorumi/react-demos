import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilterFooter from './FilterFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


import { fetchProduct } from '../actions/index'

class App extends Component {


    componentDidMount() {
        this.props.fetchTodo("111");
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <FilterFooter />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTodo: (id) => {
            dispatch(fetchProduct(id))
        }
    }

};

export default connect(null, mapDispatchToProps)(App)
