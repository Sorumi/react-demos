/**
 * 该类已弃用
 */

import React, { Component, PropTypes } from 'react'

class Link extends Component {

    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    handleClick(event) {
        event.preventDefault();
        this.props.onClick();
    }

    render() {
        if (this.props.active) {
            return (
                <span>{this.props.children}</span>
            );
        } else {
            return (
                <a href="#"
                   onClick={this.handleClick.bind(this)}
                >
                    {this.props.children}
                </a>
            );
        }
    }
}

export default Link