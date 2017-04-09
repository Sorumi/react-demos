import React, { Component, PropTypes } from 'react'
import TodoInput from '../components/TodoInput'

class Todo extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        onCompleteTodo: PropTypes.func.isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
        onSaveTodo: PropTypes.func.isRequired
    };

    state = {
        edit: false
    };

    handleCompleteTodo() {
        this.props.onCompleteTodo(this.props.id);
    }

    handleEditTodo() {
        this.setState({
            edit: true
        });
    }

    handleSaveTodo(text) {
        this.setState({
            edit: false
        });
        if (text.length === 0) {
            this.props.onDeleteTodo(this.props.id);
        } else {
            this.props.onSaveTodo(this.props.id, text);
        }
    }

    render() {
        let element;
        if (this.state.edit) {
            element = (
                <li>
                    <TodoInput
                        text={this.props.text}
                        onSave={(text) => this.handleSaveTodo(text)}
                    />
                </li>
            )
        } else {
            element = (
                <li className="todo">

                <span onClick={this.handleCompleteTodo.bind(this)}>
                    {this.props.completed ? "●" : "○"}
                </span>

                <span style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
                      onDoubleClick={this.handleEditTodo.bind(this)}>
                    {this.props.text}
                </span>

                    <button onClick={() => this.props.onDeleteTodo(this.props.id)}>×</button>
                </li>);
        }

        return element;
    }
}


export default Todo