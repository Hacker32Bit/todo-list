import { Component } from "react";
import {
  FaTrash,
  FaInfo,
  FaCheck,
  FaPenToSquare,
  FaCircleCheck,
} from "react-icons/fa6";
import { validateInput } from "../../../utils/validator";

import "./todo-list-item.css";

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEdit: false,
    text: this.props.text,
  };

  onDone = () => {
    this.setState(({ isDone }) => {
      return {
        isDone: !isDone,
      };
    });

    console.log("Done - ", this.props.text);
  };

  onImportant = () => {
    this.setState(({ isImportant }) => {
      return {
        isImportant: !isImportant,
      };
    });

    console.log("Important - ", this.state.isImportant);
  };

  onDelete = () => {
    this.props.deleteItem(this.props.id);
  };


  onEdit = () => {
    this.setState(({ isEdit, text }) => {
      if (!validateInput(text)) {
        console.log("Error") 
        return
      }

      return {
        isEdit: !isEdit,
      };
    });
  };

  onInputEdit = (event) => {
    this.setState(({ text }) => {
      return {
        text: event.target.value,
      };
    });
  };

  render() {
    const { isDone, isImportant, isEdit, text } = this.state;

    const textStyle = {
      textDecoration: isDone ? "line-through" : "none",
      color: isDone ? "#aaa" : isImportant ? "red" : "black",
      fontWeight: isDone ? "normal" : isImportant ? "bold" : "normal",
    };

    return (
      <li className="list-item">
        {isEdit ? (
          <input
            type="text"
            className="list-item-edit-input"
            value={text}
            onChange={this.onInputEdit}
          ></input>
        ) : (
          <span className="item-text" style={textStyle} onClick={this.onDone}>
            {text}
          </span>
        )}
        <span className="item-btns">
          <button onClick={this.onEdit}>
            {isEdit ? <FaCircleCheck /> : <FaPenToSquare />}
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
