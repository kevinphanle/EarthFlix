import React from "react";
import { withRouter } from "react-router-dom";
import { Player, ControlBar } from "video-react";
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
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    // this.props.fetchShow();
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ buttons: true });
    setTimeout(() => {
      this.player.play();
    }, 200);
  }

  handleMouseLeave(e) {
    e.preventDefault();

    this.setState({ buttons: false });

    setTimeout(() => {
      this.player.pause();
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
      <div className="play_button_container">
        <button onClick={this.addToMyList}>
          <div className="play_button">
            <i className="fas fa-plus"></i>
          </div>
          <div className="play_button_text">My List</div>
        </button>
      </div>;
    
    let removeVideo =
      <div className="play_button_container">
        <button onClick={this.removeFromMyList}>
          <div className="play_button">
            <i className="fas fa-check"></i>
          </div>
          <div className="play_button_text">My List</div>
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
          <Player
            ref={player => (this.player = player)}
            poster={show.posterUrl}
            autoPlay
            loop={true}
            muted={true}
            load={true}
            src={show.videoUrl}
            style="none"
          />

          {this.state.buttons ? (
            <div className="video-buttons">
              <div className="controls-left">
                <h1>{show.title}</h1>

                <span>
                  <Link className="link-button" to={`/watch/${show.id}`}>
                    <button>
                        <i className="fas fa-play"></i>
                    </button>
                  </Link>
                  {myListStatus}
                </span>

                <h2>Watch Now</h2>
                <p>{show.description}</p>
              </div>

              <div className="controls-right">
                <span>
                  <strong>Rating: </strong> {show.rating}
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
