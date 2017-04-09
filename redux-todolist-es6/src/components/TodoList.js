import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        onTodoClick: PropTypes.func.isRequired,
        onTodoDeleteClick: PropTypes.func.isRequired,
        onTodoSave: PropTypes.func.isRequired
    };

    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        //completed={todo.completed}
                        //id={todo.id}
                        //text={todo.text}
                        {...todo}
                        onCompleteTodo={this.props.onTodoClick}
                        onDeleteTodo={this.props.onTodoDeleteClick}
                        onSaveTodo={this.props.onTodoSave}
                    />
                )}
            </ul>
        );
    }
}

export default TodoList