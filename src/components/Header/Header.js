import { Component } from "react";

import "./header.css";

class Header extends Component {
  
  render() {
    const { done, important } = this.props;
    return (
      <div className="header">
        <h1>
          My Todo List
          <div className="header-info">
            <span className="header-info">Done: {done}</span>
            <span className="header-info">Important: {important}</span>
          </div>
        </h1>
      </div>
    );
  }
}

export default Header;
