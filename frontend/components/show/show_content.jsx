import React from 'react';
import { Link } from 'react-router-dom';

class ShowContent extends React.Component {
  constructor(props) {
    super(props);
    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
  }

  addToMyList() {
    this.props.createMyList({
      profile_id: this.props.profileId,
      show_id: this.props.show.id
    })
  }

  removeFromMyList() {
    this.props.deleteMyList(this.props.myList.id)
  }

  render() {
    let { show, handleClose } = this.props;
    
    let bg = {
      backgroundImage: 'url(' + show.posterUrl + ')'
    };
    let addVideo =
      <div className="content-mylist-btn-container">
        <button onClick={this.addToMyList}>
          ADD TO LIST
        </button>
      </div>;
    let removeVideo =
      <div className="content-mylist-btn-container">
        <button onClick={this.removeFromMyList}>
          REMOVE FROM LIST
        </button>
      </div>;
    let myListStatus = this.props.addedToMyList ? removeVideo : addVideo;

    return (
      <div className="content-container">
        <div className="content-details">
          <div className="content-title">{show.title}</div>
          <div className="content-description">{show.description}</div>
          <div className="content-buttons-container">
            <div className="content-play-btn-container">
              <Link to={`/watch/${show.id}`}>
                <div className="content-play-btn">
                  PLAY
                </div>
              </Link>
            </div>
            {myListStatus}
          </div>
        </div>

        <div className="content-gradient"></div>
        <div className="content-gradient2"></div>
        <div className="content-img" style={bg}>
          <Link to={`/watch/${show.id}`}>
            <div className="link"></div>
          </Link>
          <button onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default ShowContent;