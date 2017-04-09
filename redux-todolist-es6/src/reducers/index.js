import { combineReducers } from 'redux'

import { ADD_TODO, DELETE_TODO, SAVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, FETCH_PRODUCT_SUCCESS } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo)=>Math.max(maxId, todo.id), -1) + 1,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                {...todo, completed: !todo.completed} : todo
            );
        case DELETE_TODO:
            return state.filter(todo =>
            todo.id !== action.id);
        case SAVE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                {...todo, text: action.text} : todo);
        //
        case FETCH_PRODUCT_SUCCESS:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo)=>Math.max(maxId, todo.id), -1) + 1,
                    text: action.product.name,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp