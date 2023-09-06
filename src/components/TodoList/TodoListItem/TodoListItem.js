import { Component } from "react";

import "./todo-list-item.css";
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaTheRedYeti } from "react-icons/fa6";

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEdit: false,
    inputValue: "",
  };

  onDone = () => {
    this.setState({
      isDone: !this.state.isDone,
    });

    console.log("Done - ", this.props.text);
  };

  onImportant = () => {
    this.setState({
      isImportant: !this.state.isImportant,
    });

    console.log("Important - ", this.state.isImportant);
  };

  onDelete = () => {
    this.props.deleteItem(this.props.id);
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onEdit = () => {

    if (!this.state.isEdit) {
      this.setState({
        inputValue: this.props.text,
      });
    }
    this.props.editItem(this.props.id, this.state.inputValue)

    this.setState({
      isEdit: !this.state.isEdit,
    });
    
    //console.log(this.state.isEdit)
  };

  render() {
    const { text, id, editItem } = this.props;
    const { isDone, isImportant } = this.state;

    const textStyle = {
      textDecoration: isDone ? "line-through" : "none",
      color: isDone ? "#aaa" : isImportant ? "red" : "black",
      fontWeight: isDone ? "normal" : isImportant ? "bold" : "normal",
    };

    return (
      <li className="list-item" id={id}>
        <span className="item-text" style={textStyle} onClick={this.onDone}>
          {this.state.isEdit ? <input type="text" value={this.state.inputValue} onChange={this.onInputChange}></input> : text}
        </span>

        <span className="item-btns">
          <button>
            <FaPenToSquare onClick={this.onEdit} />
          </button>
          <button className="item-btn-done" onClick={this.onDone}>
            <FaCheck />
          </button>
          <button className="item-btn-important" onClick={this.onImportant}>
            <FaInfo />
          </button>
          <button className="item-btn-remove" onClick={this.onDelete}>
            <FaTrash />
          </button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;
