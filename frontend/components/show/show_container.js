import { connect } from 'react-redux';
import { fetchShow } from '../../actions/show_actions';
import { makeSelectGenre } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import Show from './show';
import { createMyList, deleteMyList } from '../../actions/my_lists_actions';

let selectGenre = makeSelectGenre();
const msp = (state, ownProps) => {
    // debugger;
    return {
        show: state.entities.shows[ownProps.show.id],
        genres: selectGenre(state, ownProps),
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchGenres: () => dispatch(fetchShow(ownProps.show.id)),
        createMyList: myList => dispatch(createMyList(myList)),
        deleteMyList: id => dispatch(deleteMyList(id))
    }
}

export default withRouter(connect(msp, mdp)(Show));
