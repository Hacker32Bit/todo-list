import { Component } from "react";

import "./search.css";

class Search extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    this.setState({
      term: e.target.value,
    });
    
    this.props.onSearch(this.state.term)
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Type text for search..."
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <button className="search-btn-all">All</button>
        <button className="search-btn-done">Done</button>
        <button className="search-btn-important">Important</button>
      </div>
    );
  }
}

export default Search;
