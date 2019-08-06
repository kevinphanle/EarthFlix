import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowPreviewPlayer extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            mute: true,
        }

        this.videoPlayer = React.createRef();
        this.watch = this.watch.bind(this);
        this.playVideo = this.playVideo.bind(this);


    }

    componentDidMount() {
        // const width = document.getElementById("show-preview-wrapper");
        // const height = width / 1.5;
        const height = 160;
        this.setState({ height });
    }

    watch() {
        const { show } = this.props;
        // if (show.show_type === 'MOVIE') {
            this.props.history.push(`/watch/${show.id}`)
        // }
    }

    playVideo() {
        if (this.videoPlayer.current === null) {
            return null;
        }

        const videoEl = this.videoPlayer.current;
        this.videoTimeout = setTimeout(() => {
            videoEl.play().then(() => {
                this.setState({ paused: false });
            })
        }, 2000)
    }

    render() {
        
        const { show } = this.props;

        return (
            <section id="show-preview-wrapper" onClick={this.watch} onMouseEnter={this.playVideo} > 
                
                <img className="show-card" onClick={this.watch} src={show ? show.posterUrl : ""} alt={show.title} />
                
                <figure className="preview-video-player">
                    <video id="preview-video" ref={this.videoPlayer} onClick={this.watch}>
                        {/* <source src={show.videos.videoUrl} type="video/mp4" /> */}
                    </video>
                    <button onClick={this.clickPlay} className="preview-play-btn">
                        <i className="fas fa-play play-btn-triangle"></i>
                        <i className="fas fa-circle play-btn-bg"></i>
                        <i className="far fa-circle play-btn-outline"></i>
                    </button>
                </figure>

                
            </section>
        );
    }
}

export default withRouter(ShowPreviewPlayer);