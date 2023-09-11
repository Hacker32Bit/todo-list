import { Component } from "react";

import "./search.css";

class Search extends Component {

  render() {
    const { onAll, onDone, onImportant, onSearch, inputValue } = this.props
    return (
      <div className="search">
        <input type="text" placeholder="Type text for search..." value={inputValue} onChange={onSearch}/>
        <button className="search-btn-all" onClick={onAll}>All</button>
        <button className="search-btn-done" onClick={onDone}>Done</button>
        <button className="search-btn-important" onClick={onImportant}>Important</button>
      </div>
    );
  }
}

export default Search;
