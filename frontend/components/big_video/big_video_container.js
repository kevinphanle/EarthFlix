import { connect } from 'react-redux';
import { fetchVideo, fetchShow } from '../../actions/show_actions';
import BigVideo from './big_video';
import { myListsHashByShowId } from '../../reducers/selectors';
import { createMyList, deleteMyList } from '../../actions/my_lists_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        show: ownProps.show,
        profileId: state.ui.currentProfileId,
        addedToMyList: !!myListsHashByShowId(state)[ownProps.show.id],
        myList: myListsHashByShowId(state)[ownProps.show.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchShow: () => dispatch(fetchShow(ownProps.showId)),
    createMyList: myList => dispatch(createMyList(myList)),
    deleteMyList: id => dispatch(deleteMyList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BigVideo);