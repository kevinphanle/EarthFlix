import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
         currentUser: state.entities.users[state.session.id]
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);