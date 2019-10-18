import React from 'react';
import { Link } from 'react-router-dom';

class ShowContent extends React.Component {
  constructor(props) {
    super(props);
    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
  }

  addToMyList() {
    this.props.addToMyList({
      profile_id: this.props.profile_id,
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
          <div className="content-play-btn">
            <i className="fas fa-plus"></i>
          </div>
          <div className="content-mylist-text">MY LIST</div>
        </button>
      </div>;
    let removeVideo =
      <div className="content-mylist-btn-container">
        <button onClick={this.removeFromMyList}>
          <div className="content-play-btn">
            <i className="fas fa-check"></i>
          </div>
          <div className="content-mylist-text">MY LIST</div>
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
                  <i className="fas fa-play"></i>
                  <div className="content-play-btn-text">Play</div>
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