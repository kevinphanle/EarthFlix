import { connect } from 'react-redux';
import { fetchVideo, fetchShow } from '../../actions/show_actions';
import BigVideo from './big_video';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        show: ownProps.show
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // requestVideo: id => dispatch(fetchVideo(id)),
    fetchShow: () => dispatch(fetchShow(ownProps.showId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BigVideo);