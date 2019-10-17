import { connect } from 'react-redux';
import IndexNav from './index_navbar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { unSetCurrentProfile, fetchProfile } from '../../actions/profile_actions';

const mapStateToProps = ({ entities, session, ui }) => ({
    currentUser: entities.users[session.id],
    currentProfileId: ui.currentProfileId || 1,
    fetchedProfile: entities.profiles[ui.currentProfileId] || {},

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    unsetCurrentProfile: profileId => dispatch(unSetCurrentProfile(profileId)),
    fetchProfile: profileId => dispatch(fetchProfile(profileId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexNav));