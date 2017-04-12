import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

class AddTodo extends Component {

    handleSubmit(event) {
        let input = this.refs.input;
        event.preventDefault();
        if (!input.value.trim()) {
            return
        }
        this.props.addTodo(input.value);
        input.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="input"/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo:(text) => {

            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);