import React from 'react';
import { Link } from 'react-router-dom';
import GenreRow from '../show/genre_row_container';

class MyListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeRowIndex: 0
    }

    this.handleActiveRow = this.handleActiveRow.bind(this);
  }

  handleActiveRow(i) {
    this.setState({ activeRowIdx: i, open: true })
  }

  render() {
    let { shows, pageType } = this.props;
    console.log(this.props);
    let rows = [];
    let container = [];
    let rowActive;
    let title = pageType === "myList" ? "My List" : "Search Results";

  

    for (let i = 0; i < shows.length; i++) {
      container.push(shows[i])
      if (container.length === 5) {
        let rowIdx = Math.floor(i/5);
        rowActive = (this.state.open && (rowIdx === this.state.activeRowIdx));
        rows.push(<GenreRow myListShows={container} key={i} pageType={pageType}
            rowActive={rowActive} handleActiveRow={()=>this.handleActiveRow(rowIdx)}/>)
        container = [];
      }
      else if (i === shows.length - 1) {
          let rowIdx = Math.floor(i / 5);
          rowActive = (this.state.open && (rowIdx === this.state.activeRowIdx));
          rows.push(<GenreRow myListShows={container} key={i} pageType={pageType}
              rowActive={rowActive} handleActiveRow={() => this.handleActiveRow(rowIdx)} />)
          container = [];
      }
    }

    return (
      <div className="mylist-container">
        <div className="mylist-wrapper">
          <div className="mylist-index-title">{title}</div>
          {rows}
        </div>
      </div>
    );
  }
}

export default MyListIndex;