import React from 'react';
import { getShow } from '../../actions/show_actions';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

        
        this.addToMyList = this.addToMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);

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

        let addShow = <button onClick={this.addToMyList}>
                <div className="mylist-button">
                    <i className="fas fa-plus-circle"></i>
                    <div className="mylist-status-dropdown">ADD TO MY LIST</div>
                </div>
          
        </button>
        let removeShow = <button onClick={this.removeFromMyList}>
                <div className="mylist-button">
                    <i className="fas fa-check-circle"></i>
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