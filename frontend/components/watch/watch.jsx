import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Watch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchShow(this.props.match.params.showId);
    }
    
    render() {
        const { show } = this.props;
        if (!show) {
            return null;
        }

        return (
            <div className="watch-video-container">
                <video
                    src={show.videoUrl}
                    controls
                    autoPlay
                    preload="true"
                    loop
                    onMouseOver={() => this.controls = true}
                    onMouseOut={() => this.controls = false}
                ></video>

                <Link to='/browse'>
                    <div className="show-watch-back-btn">
                        <span>BACK</span>
                    </div>
                </Link>

            </div>
        );
        
    }
}





export default withRouter(Watch);