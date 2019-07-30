import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        formType: "Login",
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => dispatch(login(user))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);