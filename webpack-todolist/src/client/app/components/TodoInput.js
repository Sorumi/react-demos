import React, { Component, PropTypes } from 'react'

class TodoInput extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired,
    };

    state = {
        text: this.props.text || ""
    };

    onSave() {
        let text = this.state.text.trim();

            this.props.onSave(text);
            this.setState({
                text : ""
            })
    }

    handleChange() {
        this.setState({
            text: this.refs.input.value
        })
    }

    handleBlur() {
        this.onSave();
    }

    handleSubmit(event) {
        if (event.which === 13) {
            this.onSave();
        }
    }

    render() {
        return (
            <div>
                <input
                    ref="input"
                    value={this.state.text}
                    autoFocus="true"
                    onChange={this.handleChange.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onKeyDown={this.handleSubmit.bind(this)}
                />
            </div>
        );
    }
}

export default TodoInput