import { connect } from 'react-redux';
import { createMyList, deleteMyList } from '../../actions/my_lists_actions';
import { myListsHashByShowId } from '../../reducers/selectors';
import ShowContent from './show_content';

const msp = (state, ownProps) => {
  let { show, handleClose } = ownProps;
  return {
    show: show,
    handleClose: handleClose,
    addedToMyList: !!myListsHashByShowId(state)[show.id],
    myList: myListsHashByShowId(state)[show.id] || {},
    profileId: state.ui.currentProfileId
  }
}

const mdp = dispatch => {
  return {
    createMyList: myList => dispatch(createMyList(myList)),
    deleteMyList: id => dispatch(deleteMyList(id))
  }
}

export default connect(msp, mdp)(ShowContent);