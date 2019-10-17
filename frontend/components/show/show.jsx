import React from 'react';
import { getShow } from '../../actions/show_actions';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_id: this.props.show.id,
            height: 150, 
            width: 250,
            source: this.props.show.videoUrl,
            autoplay: false,
            showButtons: false,
            toggleControls: false
        }

        // this.handleStateChange = this.handleStateChange.bind(this);
        // this.play = this.play.bind(this);
        // this.pause = this.pause.bind(this);
        // this.load = this.load.bind(this);
        this.addToMyList = this.addToMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);

    }

    // componentDidMount() {
    //     this.player.subscribeToStateChange(this.handleStateChange);
    // }

    // handleStateChange(state, prevState) {
    //     this.setState({ player: state });
    // }

    // play() {
    //     this.player.play();
    // }

    // pause() {
    //     this.player.pause();
    // }

    // load() {
    //     this.player.load();
    // }

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
        const { width, height, source, autoplay, showButtons } = this.state;

        let addShow = <button onClick={this.addToMyList}>
                <div className="mylist-button">
                    <i className="far fa-plus-circle"></i>
                    <div className="mylist-status-dropdown">ADD TO MY LIST</div>
                </div>
          
        </button>
        let removeShow = <button onClick={this.removeFromMyList}>
                <div className="mylist-button">
                    <i className="far fa-check-circle"></i>
                    <div className="mylist-status-dropdown">REMOVE FROM MY LIST</div>
                </div>
            </button>
        
        let myListStatus = this.props.addedToMyList ? removeShow : addShow;
        
        return (
            <div className="show-thumbnail grow">
                <div className="show-item-content" style={{ backgroundImage: 'url(' + show.posterUrl + ')' }}>
                        <div className="b">
                            <Link to={`/watch/${show.id}`}>
                                <div className="show-item-link">
                                    <div className="dark-overlay">
                                        <div className="show-item-overlay">
                                            <div className="show-play-btn"><i className="far fa-play-circle"></i></div>
                                            <div className="show-title">{show.title}</div>
                                            <div className="show-overlay-details">
                                                <div className="show-item-rating">{show.rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="myList-container">
                                {myListStatus}
                            </div>
                        </div>
                        <button onClick={this.handleOpen} className="show-drop-down"><i className="fas fa-chevron-down"></i></button>
                </div>
                
            </div>
        )
    }
}

export default Show;


// <div className="show_thumbnail grow">
//     <Link to={`/watch/${show.id}`}>
//         <Player
//             ref={player => {
//                 this.player = player
//             }}
//             autoplay={autoplay}
//             muted={true}
//             fluid={false}
//             poster={show.posterUrl}
//             src={source}
//             width={width}
//             height={height}
//             style="background-size: cover;"
//         >
//         <ControlBar></ControlBar>
//         </Player> 
//         <div className="myList-container">
//             {myListStatus}
//         </div>
//     </Link>
// </div>