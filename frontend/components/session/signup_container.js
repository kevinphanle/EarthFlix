import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup,login } from '../../actions/session_actions';
import { setCurrentProfile } from '../../actions/profile_actions';

const mapStateToProps = (state) => ({
    formType: "Sign Up",
    currentUser: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    setCurrentProfile: profileId => dispatch(setCurrentProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);