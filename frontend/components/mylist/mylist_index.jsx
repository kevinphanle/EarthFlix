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
    let rows = [];
    let container = [];
    let rowActive;
    let title = pageType === "myList" ? "My List" : "Search Results";

    for (let i = 0; i < shows.length; i++) {
      container.push(shows[i]);
      let rowIdx = Math.floor(i / 5);
      rowActive = (this.state.open && (rowIdx === this.state.activeRowIndex));
      rows.push(<GenreRow
        myListShows={container}
        key={i}
        pageType={pageType}
        rowActive={rowActive}
        handleActiveRow={() => this.handleActiveRow(rowIdx)} />
      )
      container = [];
    }
    console.log(rows);

    return (
      <div className="index-container">
        <div className="myList_index_title">{title}</div>
        {rows}
      </div>
    );
  }
}

export default MyListIndex;