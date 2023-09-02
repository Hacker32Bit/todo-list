import { Component } from "react";

import "./add-item.css";

class AddItem extends Component {
  render() {
    return (
      <div className="additem">
        <input type="text" placeholder="Item text..." />
        <button>Add item</button>
      </div>
    );
  }
}

export default AddItem;