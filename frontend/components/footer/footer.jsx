import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        
        return (
            <footer className="earthflix-footer">
                <a href="https://github.com/kevinphanle" target='new' className="github-symbol">
                    <i className="fab fa-github"></i>
                </a>

                <a href="https://facebook.com/kevinphanle" target='new' className="facebook-symbol">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </footer>

        );
    }
}

export default withRouter(Footer);