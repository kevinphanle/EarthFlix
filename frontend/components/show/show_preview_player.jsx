import React from 'react';
import { withRouter } from 'react-router-dom';

class ShowPreviewPlayer extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
        }
        this.watch = this.watch.bind(this);
    }

    componentDidMount() {
        // const width = document.getElementById("show-preview-wrapper");
        // const height = width / 1.5;

        // this.setState({ height });
    }

    watch() {
        const { show } = this.props;
    }

    render() {
        
        const { show } = this.props;

        return (
            <section id="show-preview-wrapper" onClick={this.watch} > 
                <img src={show ? show.posterUrl : ""} alt=""/>
                <figure className="preview-video-player">
                    <video id={`show-${show.id} preview-video`} poster="https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg">
                        {/* <source src={show.videos.videoUrl} type="video/mp4" /> */}
                    </video>
                    <button onClick={this.clickPlay} className="preview-play-btn">
                        <i className="fas fa-play play-btn-triangle"></i>
                    </button>
                </figure>

                
            </section>
        );
    }
}

export default withRouter(ShowPreviewPlayer);