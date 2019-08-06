import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/show_actions';
import BigVideo from './big_video';

const mapStateToProps = (state, ownProps) => {
    const { show } = ownProps;

    const previewId = show.show_type === 'MOVIE' ? show.movie_id : show.episode_ids[0];
    const previewVideo = state.entities.videos[previewId] || null;
    // debugger;
    return {
        video: previewVideo,
        previewId
    }
}

const mapDispatchToProps = dispatch => ({
    requestVideo: id => dispatch(fetchVideo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BigVideo);