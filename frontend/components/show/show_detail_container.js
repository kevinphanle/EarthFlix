import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchShow } from '../../actions/show_actions';
import ShowDetail from './show_detail';

const mapStateToProps = (state, ownProps) => {
    return {
        show: state.entities.shows[ownProps.match.params.showId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShowInfo: (id) => dispatch(fetchShow(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowDetail));