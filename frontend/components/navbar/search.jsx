import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      active: false
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ input: "" });
  }

  handleClick(e) {
    e.stopPropagation();
    if (this.state.active) {
      if (this.node.contains(e.target)) {
        return;
      } else {
        this.setState({active: false})
      }
    }
  }

  handleExpand() {
    this.setState({active: true});
  }


  handleFetchResults(text) {
    let input = { input: text };
    if (text !== "") {
      this.props.fetchSearchResults(input).then(() => this.props.history.push('/search'));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== "" && this.state.input === "") {
        this.props.clearSearchResults();
        this.props.history.push('/browse');
    }
  }

  render() {
    let expanded = 
      <div className="search-box">
        <button className="search-button">
          Search
        </button>
        <form onSubmit={this.handleSubmit} className="search-form" ref={node => this.node = node}>
          <input
            type="text"
            value={this.state.input}
            placeholder="Search..."
            onChange={this.update('input')}
            className="search-form-input"
          />
          <button className="search-input-clear-btn" onClick={this.handleClear}>Clear</button>
        </form>
      </div>
    let compressed = <button onClick={this.handleExpand} className="search_button"><i className="fas fa-search"></i></button>

    let search = this.state.active ? expanded : compressed;

    let containerState = this.state.active ? "search_container active_search" : "search_container";

    return (
      <div className={containerState}>
        {search}
      </div>
    );
  }

}