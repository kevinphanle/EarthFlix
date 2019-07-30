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



        if (currentUser) {
            return (
                <header className={navbarClass}>
                    <section className="header-nav">
                        <Link to="/" className="logo-btn">EarthFlix</Link>

                        <button onClick={this.handleClick} className="logout-btn" >Log Out</button>
                    </section>
                </header>
            )
        } else {
            return (
                <header className={navbarClass}>
                    <section className="header-nav centered">
                        <Link to="/" className='logo-btn'>EarthFlix</Link>

                        <Link to="/login" className='login-btn'>Sign In</Link>
                    </section>
                </header>
            )
        }
    }
}
export default withRouter(Navbar);