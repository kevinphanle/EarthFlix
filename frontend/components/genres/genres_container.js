import { connect } from 'react-redux';
import { fetchShows } from '../actions/show_actions';
import Genres from './genres';

const msp = (state, ownProps) => {
    return {
        genre: state.entities.genres[ownProps.match.params.genreId],
        shows: state.entities.shows,
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchShows: () => dispatch(fetchShows()),
})

export default withRouter(connect(msp, mdp)(Genres);