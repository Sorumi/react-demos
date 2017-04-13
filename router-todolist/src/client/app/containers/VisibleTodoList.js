import { connect } from 'react-redux'
import { deleteTodo, toggleTodo, saveTodo } from '../actions/index'
import TodoList from '../components/TodoList'
import * as todoFilters from '../constants/TodoFilters'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case todoFilters.SHOW_ALL:
            return todos;
        case todoFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case todoFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onTodoDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        },
        onTodoSave:(id, text) => {
            dispatch(saveTodo(id, text))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList