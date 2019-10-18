import { connect } from 'react-redux';
import { fetchShows } from '../../actions/show_actions';
import ShowIndex from './show_index';
import { genresSelector } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { fetchGenres } from '../../actions/genre_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const shows = Object.values(state.entities.shows);
    const genres = Object.values(state.entities.genres);
    const firstShow = shows[Math.floor(Math.random() * shows.length)];
    return {
        shows,
        genres,
        firstShow,
        modal: state.ui.modal,
        currentProfileId: state.ui.currentProfileId
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchShows: () => dispatch(fetchShows()),
        fetchGenres: () => dispatch(fetchGenres()),
        openModal: type => dispatch(openModal(type))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowIndex));