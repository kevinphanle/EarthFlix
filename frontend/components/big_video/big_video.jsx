import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class BigVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: false,
    };

    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ buttons: true });
    this.refs.vidRef.play();
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.setState({ buttons: false });
    setTimeout(() => {
      this.refs.vidRef.pause();
    }, 400);
  }

  addToMyList() {
    this.props.createMyList({
        profile_id: this.props.profileId,
        show_id: this.props.show.id,
    });
  }

  removeFromMyList() {
    this.props.deleteMyList(this.props.myList.id);
  }

  render() {
    const { show } = this.props;
    if (!show) {
      return null;
    }
    
    let addVideo =
      <div className="list_button_container">
        <button onClick={this.addToMyList}>
          Add to List
        </button>
      </div>;
    
    let removeVideo =
      <div className="list_button_container">
        <button onClick={this.removeFromMyList}>
          Remove from List
        </button>
      </div>;
    let myListStatus = this.props.addedToMyList ? removeVideo : addVideo;

    return (
      <div className="big-video-wrapper">
        <div
          className="big-video-container"
          id="big-video"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          
          <video
            src={show.videoUrl}
            ref="vidRef"
            type="video/mp4"
            loop
            muted
            autoPlay
            preload="none"
          ></video>

          {this.state.buttons ? (
            <div className="video-buttons">
              <div className="controls-left">
                <h1>{show.title}</h1>

                <span>
                  <Link className="link-button" to={`/watch/${show.id}`}>
                    Play
                  </Link>
                  {myListStatus}
                </span>

                <h2>Watch Now</h2>
                <p>{show.description}</p>
              </div>

              <div className="controls-right">
                <span>
                  Rating: {show.rating}
                </span>
              </div>
            </div>
          ) : null}

          <div className="big-video-gradient"></div>
          <div className="big-video-gradient2"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(BigVideo);
