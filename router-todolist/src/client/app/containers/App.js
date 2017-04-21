import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { BrowserRouter } from 'react-router-dom'

import FilterFooter from './FilterFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import * as todoFilters from '../constants/TodoFilters'


import { fetchProduct, setVisibilityFilter } from '../actions/index'

const FILTER_TITLES = {
    [todoFilters.SHOW_ALL]: 'All',
    [todoFilters.SHOW_ACTIVE]: 'Active',
    [todoFilters.SHOW_COMPLETED]: 'Completed'
};

//BrowserRouter.history.listen(location =>{
//
//});

class App extends Component {


    componentDidMount() {
        this.fetchTodos();
        let filter;
        let filterName = this.props.match.params.filterName;
        for (var key in FILTER_TITLES) {
            if (FILTER_TITLES[key].toLowerCase() === filterName.toLowerCase()) {
                filter = key;
            }
        }
        if (filter) {
            this.props.setFilter(filter);
        }
    }



    fetchTodos() {
        this.props.fetchTodo("0");
        this.props.fetchTodo("1");
        this.props.fetchTodo("2");
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
        },
        setFilter:(filter)=> {
            dispatch(setVisibilityFilter(filter))
        }
    }

};

export default connect(null, mapDispatchToProps)(App)

