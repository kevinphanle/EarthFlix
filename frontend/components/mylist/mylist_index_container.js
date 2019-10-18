import { connect } from 'react-redux';
import { deleteMyList } from '../../actions/my_lists_actions';
import MyListIndex from './mylist_index';
import * as Selectors from '../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    shows: Selectors.myListsShows(state),
    pageType: "myList"
  }
}

const mdp = dispatch => ({
  deleteMyList: id => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(MyListIndex);