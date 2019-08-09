import { connect } from 'react-redux';
import { fetchShow } from '../../actions/show_actions';
import { withRouter } from 'react-router-dom';
import Watch from './watch';

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.entities.shows[ownProps.match.params.showId]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShow: (showId) => dispatch(fetchShow(showId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));