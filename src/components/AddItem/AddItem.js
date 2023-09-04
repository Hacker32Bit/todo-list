import { Component } from "react";
import ErrorMessage from "../ErrorMessage";

import "./add-item.css";

class AddItem extends Component {
  state = {
    inputValue: "",
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="additem">
      <div>
        {this.state.inputValue}
      </div>
        <input
          type="text"
          placeholder="Item text..."
          onChange={this.onInputChange}
        />
        <button>Add item</button>
      </div>
    );
  }
}

export default AddItem;
