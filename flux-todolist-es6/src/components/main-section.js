import React, { Component } from 'react';
import TodoItem from './todo-item';

class MainSection extends Component {

    getTodoItems(allTodos) {
    return Object.keys(allTodos).map(
        (key) => (<TodoItem key={key} todo={allTodos[key]} />)
    );
}

    render() {
        let todoItems = this.getTodoItems(this.props.allTodos);

        return (
            <section id="main">
                <ul id="todo-list">{todoItems}</ul>
            </section>
        );
    }

}


export default MainSection