import React, { Component } from 'react';
import TodoActions from '../actions/todo-actions';
import TodoTextInput from './todo-text-input';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <h1>type.</h1>
                <TodoTextInput
                  id="new-todo"
                  placeholder="What needs to be done?"
                  onSave={this.onSave}
                />
            </header>
        );
    }

    onSave(text) {
        TodoActions.create(text);
    }

}

export default Header