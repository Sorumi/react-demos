/**
 * Created by Sorumi on 17/3/26.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Footer from '../components/Footer'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLinkClick: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
};

const FilterFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FilterFooter