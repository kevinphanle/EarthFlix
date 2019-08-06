import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DateTimeUTIL from '../../util/date_time_util';

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayerTime: 0,
            paused: false,
            fullscreen: false,
            muted: false,
            volume: 0.8,
            prevVolume: 0.8,
            hidden: true,
            mouseMoving: false,
        };
        this.timeout;
        this.videoPlayer = React.createRef();
        this.openFullscreen = this.openFullscreen.bind(this);
        this.togglePlayPause = this.togglePlayPause.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.jumpBack = this.jumpBack.bind(this);
        this.jumpForward = this.jumpForward.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.showControls = this.showControls.bind(this);
        this._hideControls = this._hideControls.bind(this);
        this._tick = this._tick.bind(this);


        
    }

    componentDidMount() {
        this._isMounted = true;

        const { showId, videoId } = this.props.match.params;
        this.props.fetchShow(showId);
        this.props.fetchVideo(videoId);

        this.interval = setInterval(this._tick, 1000); //updates the timer each half second
    }

    componentWillUnmount() {
        this._isMounted = false;

        clearInterval(this.interval);
    }


    togglePlayPause(e) {
        const videoEl = this.videoPlayer.current;
        // debugger
        if (videoEl.paused) {
            videoEl.play();
            this.setState({ paused: false });
        } else {
            videoEl.pause();
            this.setState({ paused: true });
        }
    }

    findAudioIcon() {
        const { muted, volume } = this.state;

        if (muted || volume === 0) {
            return <i className="fas fa-volume-mute"></i>;
        } else if (volume > 0.5) {
            return <i className="fas fa-volume-up"></i>;
        } else {
            return <i className="fas fa-volume-down"></i>;
        }
    }

    toggleMute() {
        const { muted, volume, prevVolume } = this.state;
        const videoEl = this.videoPlayer.current;
        const currVolume = volume === 0 ? 0.1 : volume;

        if (muted) {
            videoEl.muted = false;
            videoEl.volume = prevVolume;
            this.setState({ muted: false, volume: prevVolume })
        } else {
            videoEl.muted = true;
            videoEl.volume = 0;
            this.setState({ muted: true, volume: 0, prevVolume: currVolume })
        }
    }

    handleVolumeChange(e) {
        const videoEl = this.videoPlayer.current;
        videoEl.volume = e.target.value;

        if (videoEl.volume === 0) {
            videoEl.muted = true;
            this.setState({ volume: videoEl.volume, muted: true, prevVolume: 0.1 })
        } else if (videoEl.muted) {
            videoEl.muted = false;
            this.setState({ volume: videoEl.volume, muted: false })
        } else {
            this.setState({ volume: videoEl.volume })
        }
    }

    handleTimeChange(e) {
        const videoEl = this.videoPlayer.current;
        videoEl.currentTime = e.target.value;
        this.setState({ currentPlayerTime: videoEl.currentTime })
    }

    jumpBack() {
        const videoEl = this.videoPlayer.current;
        videoEl.currentTime = videoEl.currentTime - 10;

        this.setState({ currentPlayerTime: videoEl.currentTime })
    }

    jumpForward() {
        const videoEl = this.videoPlayer.current;
        videoEl.currentTime = videoEl.currentTime + 10;

        this.setState({ currentPlayerTime: videoEl.currentTime })
    }

    openFullscreen() {
        const videoEl = this.videoPlayer.current;

        if (videoEl.requestFullscreen) {
            videoEl.requestFullscreen();
        } else if (videoEl.mozRequestFullScreen) { /* Firefox */
            videoEl.mozRequestFullScreen();
        } else if (videoEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            videoEl.webkitRequestFullscreen();
        } else if (videoEl.msRequestFullscreen) { /* IE/Edge */
            videoEl.msRequestFullscreen();
        }
    }

    closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    showControls() {
        if (this.state.mouseMoving) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this._hideControls();
            }, 3000);
        } else {
            this.setState({ mouseMoving: true, hidden: false });
            this.timeout = setTimeout(() => {
                this._hideControls();
            }, 3000);
        }
    }

    _hideControls() {
        this.setState({ hidden: true, mouseMoving: false })
    }

    _tick() {
        if (this.videoPlayer.current) {
            this.setState({ currentPlayerTime: this.videoPlayer.current.currentTime })
        }
    }

    render() {
        const { paused, currentPlayerTime, volume, muted, hidden } = this.state;
        const { video, show } = this.props;
        const runtime = video ? video.runtime : 0;
        let playPauseBtn = null, remainingTime = null, audioIcon = null, volumeStyle = null, timeStyle = null, controlStyle = null;

        if (this.videoPlayer.current !== null) {
            playPauseBtn = paused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>
            remainingTime = Math.floor(runtime - currentPlayerTime);
            const currProgress = (currentPlayerTime / runtime) * 100;
            const currVolume = muted ? 0 : volume;

            timeStyle = {
                background: `linear-gradient( to right, red 0%, red ${currProgress}%, #7c7c7c ${currProgress}% , #7c7c7c ${remainingTime}%)`
            }
            volumeStyle = {
                background: `linear-gradient( to right, red 0%, red ${currVolume * 100}%, #7c7c7c ${currVolume * 100}%, #7c7c7c ${(1 - currVolume) * 100}% )`
            };
            controlStyle = {
                opacity: `${hidden ? 0 : 1}`
            }
            audioIcon = this.findAudioIcon();
        }

        let fullscreenBtn, fullscreenFunc;

        if (window.fullScreen) {
            fullscreenBtn = <i className="fas fa-compress"></i>;
            fullscreenFunc = this.closeFullscreen;
        } else {
            fullscreenBtn = <i className="fas fa-expand"></i>;
            fullscreenFunc = this.openFullscreen;
        }

        return (
            <figure className="main-video-player">

                <div className="Video-Container">
                    <video className="main-video-tag"
                        ref={this.videoPlayer}
                        poster={window.tempBgURL}
                        autoPlay
                        controls={false}
                    >
                        {/* <source src={video ? video.video_url : ''} */}
                        <source src={video ? video.videoUrl : ''}
                            type="video/mp4"
                        />
                        Browser does not support the video tag
                    </video>
                </div>

                <div className="all-player-controls">
                    <div className="clickable-area"
                        onClick={this.togglePlayPause}
                        onKeyPress={this.togglePlayPause}
                        onMouseMove={this.showControls}
                    ></div>

                    <div className="full-control-area" style={controlStyle}>
                        <Link to="/browse" className="back-to-browse-btn">
                            <i className="fas fa-arrow-left"></i>
                            <span className="back-to-browse-message">Back to browse</span>
                        </Link>

                        <div className="main-video-bottom-controls">
                            <div className="progress-scrubber-wrapper">
                                <figure className="scrubber-bar">
                                    <input type="range"
                                        className="slider time-slider"
                                        min="0"
                                        max={`${runtime}`}
                                        step="0.1"
                                        onChange={this.handleTimeChange}
                                        onInput={this.handleTimeChange}
                                        value={`${currentPlayerTime}`}
                                        style={timeStyle}
                                    />
                                </figure>
                                <span className="scrubber-remaining-time">{DateTimeUTIL.secondsToTime(remainingTime)}</span>
                            </div>

                            <div className="Player-Controls-wrapper">
                                <div className="Player-Controls">
                                    <div className="left-controls">
                                        <button className="play-pause-toggle-btn" onClick={this.togglePlayPause}>{playPauseBtn}</button>

                                        <button onClick={this.jumpBack} className='forward-10-btn'>
                                            <i className="fas fa-undo"></i>
                                            <span>10</span>
                                        </button>

                                        <button onClick={this.jumpForward} className='back-10-btn'>
                                            <i className="fas fa-redo"></i>
                                            <span>10</span>
                                        </button>

                                        <div className="audio-button-wrapper">
                                            <button className="audio-btn" onClick={this.toggleMute}>
                                                {audioIcon}
                                            </button>
                                            <figure className="audio-levels-popup">
                                                <input type="range"
                                                    className="slider volume-slider"
                                                    min='0.0'
                                                    max='1.0'
                                                    step="0.1"
                                                    onChange={this.handleVolumeChange}
                                                    onInput={this.handleVolumeChange}
                                                    value={`${volume}`}
                                                    style={volumeStyle}
                                                />
                                            </figure>
                                        </div>

                                        <article className="video-title-ep-name">
                                            <span className="show-title">{show ? show.title : null}</span>
                                            <span className="episode-name">{show && video === "EPISODIC" ? video.name : null}</span>
                                        </article>
                                    </div>

                                    <div className="right-controls">
                                        {/* <button className="episode-list-btn">
                                            <i className="fas fa-layer-group"></i>
                                        </button> */}

                                        <button className="fullscreen-toggle" onClick={fullscreenFunc}>
                                            {fullscreenBtn}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
        );
    }
}

export default withRouter(Watch);