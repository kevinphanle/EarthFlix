import { connect } from 'react-redux';
import GenreRow from './genre_row';
import { fetchShows } from './../../actions/show_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;   
    // const shows = Object.values(ownProps.shows);
    
    return {
        genre: ownProps.genre,
        // shows: Object.values(ownProps.shows).filter(show => ownProps.genre.showIds.includes(show.id))
        shows: ownProps.genre.showIds.map(showId => state.entities.shows[showId])
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchShows: () => dispatch(fetchShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreRow);