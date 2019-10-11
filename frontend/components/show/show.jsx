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

        this.handleStateChange = this.handleStateChange.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);

    }

    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange);
    }

    handleStateChange(state, prevState) {
        this.setState({ player: state });
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
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
        const { width, height, source, autoplay, showButtons } = this.state;
        
        return (
            <div className="show_thumbnail grow">
                <Link to={`/watch/${show.id}`}>
                    <Player
                        ref={player => {
                            this.player = player
                        }}
                        autoplay={autoplay}
                        muted={true}
                        fluid={false}
                        poster={show.posterUrl}
                        src={source}
                        width={width}
                        height={height}
                        style="background-size: cover;"
                    >
                    <ControlBar></ControlBar>
                    
                    </Player> 
                </Link>
            </div>
        )
    }
}

export default Show;