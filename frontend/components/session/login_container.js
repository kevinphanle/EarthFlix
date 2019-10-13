import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { setCurrentProfile } from '../../actions/profile_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        formType: "Log In",
        currentUser: state.session.id
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => dispatch(login(user)),
        setCurrentProfile: profileId => dispatch(setCurrentProfile(profileId))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);