import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Player, ControlBar, LoadingSpinner } from 'video-react';


class Watch extends React.Component {
    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        // debugger;
        this.props.fetchShow(this.props.match.params.showId);
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
        // this.player.play();
    }
    
    componentDidUpdate() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this))
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }



    render() {
        const { show } = this.props;
        if (!show) {
            return null;
        }

        return (
            <div className="watch-video-container" >
                <Player
                    ref={player => {
                        this.player = player;
                        // console.log(this.player);
                    }}
                    // width="100%"
                    autoPlay
                    loop={true}
                    // muted={true}
                    load={true}
                    src={show.videoUrl}
                    poster={show.posterUrl}
                    fluid={true}
                >
                    <LoadingSpinner/>
                    <ControlBar autoHide={true} />
                </Player>

                <Link to='/browse'>
                    <div className="show-watch-back-btn">
                        <i className="fas fa-arrow-alt-circle-left"></i>
                    </div>
                </Link>

            </div>
        );
        
    }
}





export default withRouter(Watch);