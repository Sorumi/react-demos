import React, { Component, PropTypes } from 'react'
//import FilterLink from '../containers/FilterLink'
import LinkComponent from '../components/Link'
import * as todoFilters from '../constants/TodoFilters'
import { NavLink } from 'react-router-dom';

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
                        <NavLink to={'/' + FILTER_TITLES[filter]}
                              key={filter}
                              activeStyle={{
                              textDecoration: 'none',
                              color: 'black'
                              }}
                              onClick={() => this.props.onLinkClick(filter)}
                        >
                            {FILTER_TITLES[filter]}
                        </NavLink>
                )}
            </div>
        );
    }
}

export default Footer
