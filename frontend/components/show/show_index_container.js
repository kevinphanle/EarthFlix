import { connect } from 'react-redux';
import { fetchShows, fetchShow, fetchVideo, fetchVideos } from '../../actions/show_actions';
import ShowIndex from './show_index';

const mapStateToProps = ({ entities, session }) => {
    const shows = Object.values(entities.shows);
    const videos = entities.videos;


    return {
        shows,
        videos
    }
}


const mapDispatchToProps = (dispatch, action) => {
    return {
        requestAllShows: () => dispatch(fetchShows()),
        fetchShow: (id) => dispatch(fetchShow(id)),
        // fetchVideo: (id) => dispatch(fetchVideo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowIndex);