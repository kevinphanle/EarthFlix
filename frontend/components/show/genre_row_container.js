import { connect } from 'react-redux';
import GenreRow from './genre_row';
import { fetchShows } from './../../actions/show_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        genre: ownProps.genre ? ownProps.genre : "Results",
        shows: ownProps.genre ? ownProps.genre.showIds.map(showId => state.entities.shows[showId]) : ownProps.myListShows
        // shows: ownProps.
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchShows: () => dispatch(fetchShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreRow);