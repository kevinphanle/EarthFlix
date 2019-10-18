import { connect } from 'react-redux';
import { createMyList, deleteMyList } from '../../actions/my_lists_actions';
import { myListsHashByShowId } from '../../reducers/selectors';
import ShowContent from './show_content';

const msp = (state, ownProps) => {
  return {
    show: ownProps.show,
    handleClose: ownProps.handleClose,
    addedToMyList: !!myListsHashByShowId(state)[ownProps.show.id],
    myList: myListsHashByShowId(state)[ownProps.show.id] || {},
    profileId: state.ui.currentProfileId
  }
}

const mdp = dispatch => ({
  createMyList: myList => dispatch(createMyList(myList)),
  deleteMyList: id => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(ShowContent);