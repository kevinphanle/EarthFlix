import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Images from '../images';

class Footer extends React.Component {

    render() {
        console.log(Images);
        console.log(window);
        return (
            <footer className="earthflix-footer">
                <a href="https://github.com/kevinphanle" target='new' className="footerimg">
                    <img src={window.github} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-le-b28887158/" target='new' className="footerimg">
                    <img src={window.linkedin} alt=""/>
                </a>
                <a href="https://kevinphanle.dev/" target='new' className="footerimg">
                    <img src={window.user} alt=""/>
                </a>
                <a href="https://facebook.com/kevinphanle" target='new' className="footerimg">
                    <img src={window.facebook} alt=""/>
                </a>
            </footer>

        );
    }
}

export default withRouter(Footer);