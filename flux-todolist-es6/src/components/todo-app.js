import React, { Component } from 'react';
import TodoStore from '../stores/todo-store';

import Header from './header';
import MainSection from './main-section';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = this.getTodoState();
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState(this.getTodoState());
    }

    getTodoState() {
        return ({
            allTodos: TodoStore.getAll()
        });
    }
    render() {
        return (
            <div>
                <Header />
                <MainSection
                  allTodos={this.state.allTodos}
                  //areAllComplete={this.state.areAllComplete}
                />
            </div>
        );
    }

}

export default TodoApp