import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const { videoId, showId } = this.props.match.params;
        this.props.fetchVideo(videoId);
        this.props.fetchShow(showId);
    }

    render() {
        const { video, show } = this.props;
        

        return (
            <figure className="main-video-player">

                <div className="video-container">
                    <video className="main-video" autoPlay controls poster={window.tempBg}>
                        <source src="" type="video/mp4"/>
                    </video>
                </div>
            </figure>
        );
    }
}

export default withRouter(Watch);