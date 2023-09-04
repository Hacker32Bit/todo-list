import { Component } from "react";

import "./message.css";

class Message extends Component {
  render() {
    const { type, text } = this.props;
    
    return (
        <div className={"message " + type}>{text}</div>
    );
  }
}

export default Message;
