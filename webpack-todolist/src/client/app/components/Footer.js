import React, { Component, PropTypes } from 'react'
//import FilterLink from '../containers/FilterLink'
import Link from '../components/Link'
import * as todoFilters from '../constants/TodoFilters'

const FILTER_TITLES = {
    [todoFilters.SHOW_ALL]: 'All',
    [todoFilters.SHOW_ACTIVE]: 'Active',
    [todoFilters.SHOW_COMPLETED]: 'Completed'
};


class Footer extends Component {

    static propTypes = {
        selectedFilter: PropTypes.string.isRequired,
        onLinkClick: PropTypes.func.isRequired
    };


    render() {
        return (
            <div>
                {Object.keys(FILTER_TITLES).map(
                    (filter) =>
                        <Link key={filter}
                              filter={filter}
                              active={this.props.selectedFilter === filter}
                              onClick={() => this.props.onLinkClick(filter)}>
                            {FILTER_TITLES[filter]}
                        </Link>
                )}
            </div>
        );
    }
}

export default Footer






