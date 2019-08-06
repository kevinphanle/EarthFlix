import { connect } from 'react-redux';
import { fetchVideo, fetchShow } from '../../actions/show_actions';
import { withRouter } from 'react-router-dom';
import Watch from './watch';

const mapStateToProps = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId];
    const show = state.entities.shows[ownProps.match.params.showId];
    // debugger;
    return {
        video,
        show
    }
}

const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchShow: (showId) => dispatch(fetchShow(showId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));