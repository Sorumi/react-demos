import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function addTodo(text) {
    return {type: types.ADD_TODO, text}
}

export function deleteTodo(id) {
    return {type: types.DELETE_TODO, id}
}

export function saveTodo(id, text) {
    return {type: types.SAVE_TODO, id, text}
}

export function toggleTodo(id) {
    return {type: types.TOGGLE_TODO, id}
}

export function setVisibilityFilter(filter) {
    return {type: types.SET_VISIBILITY_FILTER, filter}
}

//test

export function requestProduct(id) {
    return {type: types.FETCH_PRODUCT_REQUEST, id}
}

export function receiveProduct(id, json) {
    return {
        type: types.FETCH_PRODUCT_SUCCESS,
        id,
        product: json
    }
}

//
export function fetchProduct(id) {

    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。

    return function (dispatch) {

        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。

        dispatch(requestProduct(id));

        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。

        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

        return fetch('api/product/' + id)
            .then(response => response.json())
            .then(json => (
                //console.log(json)
                dispatch(receiveProduct(id, json))
            ));

        // 在实际应用中，还需要
        // 捕获网络请求的异常。
    }
}