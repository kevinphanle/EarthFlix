import React from "react";
import { Link, withRouter } from 'react-router-dom';
                    
class Navbar extends React.Component {
                    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.push('/'));
    }
    render () {
        const { currentUser } = this.props;
        const { location } = this.props.history;
        const navbarClass = location.pathname === '/' ? "right-header-wrapper" : "left-header-wrapper";

        let SigninBtnClass, headerClass, hasBorder, alreadyHaveAccountMsg;
        if (location.pathname === '/signup') {
            SigninBtnClass = 'login-btn-white';
            headerClass = 'header-nav centered';
            hasBorder = 'signup-border';
        } else {
            SigninBtnClass = 'login-btn';
            headerClass = 'header-nav';
            hasBorder = '';
        }

        if (currentUser) {
            return (
                <header className={navbarClass}>
                    <section className="header-nav">
                        <Link to="/" className="logo-btn">
                            <img src={window.mainLogo} className="earthflix-logo" alt=""/>
                        </Link>

                        <button onClick={this.handleClick} className="logout-btn" >Log Out</button>
                    </section>
                </header>
            )
        } else {
            return (
                <header className={`${navbarClass} ${hasBorder}` }>
                    <section className={headerClass}>
                        <Link to="/" className='logo-btn'>
                            <img src={window.mainLogo} className="earthflix-logo" alt="" />

                        </Link>

                        <Link to="/login" className={SigninBtnClass}>Sign In</Link>
                    </section>
                </header>
            )
        }
    }
}
export default withRouter(Navbar);