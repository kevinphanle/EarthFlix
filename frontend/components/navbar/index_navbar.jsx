import React from 'react';
import { Link } from 'react-router-dom';

class IndexNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <header className="index-navbar-wrapper">
                <header className="index-navbar">

                    <section className="left-nav">
                        <Link to="/browse" className="main-logo-btn">
                            <img src={window.mainLogo} className="earthflix-logo" alt=""/>
                        </Link>
                    </section>

                    <section className="right-nav">
                        <section className="search-bar">

                        </section>

                        <button onClick={this.handleLogout} className="logout-btn" >Log Out</button>
                    </section>
                </header>
            </header>
        );
    }

}

export default IndexNav;