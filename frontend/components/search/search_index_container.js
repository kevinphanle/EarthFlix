import { connect } from 'react-redux';
import * as Selectors from '../../reducers/selectors';
import MyListIndex from '../mylist/mylist_index';

const msp = (state, ownProps) => {
  return {
    shows: Selectors.searchResultShows(state),
    pageType: 'search'
  }
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(MyListIndex);