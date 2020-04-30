import React from "react";
import { Link } from "react-router-dom";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.lazy = this.lazy.bind(this);
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

  handleOpen() {
    this.props.handleOpen();
  }

  lazy() {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyloadImages;

      if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });

        lazyloadImages.forEach(function (image) {
          imageObserver.observe(image);
        });
      } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
          if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }

          lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
              if (img.offsetTop < window.innerHeight + scrollTop) {
                img.src = img.dataset.src;
                img.classList.remove("lazy");
              }
            });
            if (lazyloadImages.length == 0) {
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      }
    });
  }

  render() {
    const { show } = this.props;

    let addShow = (
      <button onClick={this.addToMyList}>
        <div className="mylist-button">
          <i className="fas fa-plus-circle"></i>
          <div className="mylist-status-dropdown">ADD TO MY LIST</div>
        </div>
      </button>
    );
    let removeShow = (
      <button onClick={this.removeFromMyList}>
        <div className="mylist-button">
          <i className="fas fa-check-circle"></i>
          <div className="mylist-status-dropdown">REMOVE FROM MY LIST</div>
        </div>
      </button>
    );

    let myListStatus = this.props.addedToMyList ? removeShow : addShow;


    return (
      <div
        className={`show-thumbnail lazy grow ${this.props.active}`}
        onLoad={this.lazy()}
      >
        <div
          className="show-item-content"
          style={{ backgroundImage: "url(" + show.posterUrl + ")" }}
        >
          <div className="b">
            <Link to={`/watch/${show.id}`}>
              <div className="show-item-link">
                <div className="dark-overlay">
                  <div className="show-item-overlay">
                    <div className="show-play-btn">
                      <i className="far fa-play-circle"></i>
                    </div>
                    <div className="show-title">{show.title}</div>
                    <div className="show-overlay-details">
                      <div className="show-item-rating">{show.rating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="myList-container">{myListStatus}</div>
          </div>
          <button onClick={this.handleOpen} className="show-drop-down">

            <img id="carat-down" src={window.carat} alt=""/>
          </button>
        </div>
        <div className="show-border-arrow">

        </div>
      </div>
    );
  }
}

export default Show;
