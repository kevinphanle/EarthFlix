import { connect } from 'react-redux';
import { fetchShows } from '../../actions/show_actions';
import ShowIndex from './show_index';
import { genresSelector } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { fetchGenres } from '../../actions/genre_actions';

const mapStateToProps = (state) => {
    // const shows = Object.keys(state.entities.shows).map(id => state.entities.shows[id]);
    const shows = Object.values(state.entities.shows);
    const genres = Object.values(state.entities.genres);
    // const randomId = Object.keys(state.entities.shows)
    const firstShow = Object.values(state.entities.shows)[0];
    // debugger
    return {
        shows,
        genres,
        firstShow
    }
}


const mapDispatchToProps = (dispatch, action) => {
    return {
        fetchShows: () => dispatch(fetchShows()),
        fetchGenres: () => dispatch(fetchGenres())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowIndex));