import { connect } from 'react-redux';
import { fetchShows, fetchShow, fetchVideo, fetchVideos } from '../../actions/show_actions';
import ShowIndex from './show_index';

const mapStateToProps = (state) => ({
        shows: Object.values(state.entities.shows)
})


const mapDispatchToProps = (dispatch, action) => {
    return ({
        fetchShows: () => dispatch(fetchShows()),
        fetchShow: (id) => dispatch(fetchShow(id)),
        fetchVideo: (id) => dispatch(fetchVideo(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowIndex);