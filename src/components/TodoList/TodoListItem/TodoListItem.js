  import { Component } from "react";

import "./todo-list-item.css";
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaCircleCheck } from "react-icons/fa6";

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEdit: false,
    text: this.props.text
  };

  onDone = () => {
    this.setState(({ isDone }) => {
      return {
        isDone: !isDone
      }
    });

    console.log("Done - ", this.props.text);
  };

  onImportant = () => {
    this.setState(({ isImportant }) => {
      return {
        isImportant: !isImportant
      }
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
    this.setState(({ isEdit }) => {
      return {
        isEdit: !isEdit
      }
    })
    
  };

onInputEdit = (event) => {
  this.setState(({ text }) => {
    return {
      text: event.target.value
    }
  })
}

  render() {
    const { isDone, isImportant, isEdit, text } = this.state;

    const textStyle = {
      textDecoration: isDone ? "line-through" : "none",
      color: isDone ? "#aaa" : isImportant ? "red" : "black",
      fontWeight: isDone ? "normal" : isImportant ? "bold" : "normal",
    };

    return (
      <li className="list-item">
        {
          isEdit ? (
            <input type="text" className="list-item-edit-input" value={text}
            onChange={this.onInputEdit}></input>
          ) : (
            <span className="item-text" style={textStyle} onClick={this.onDone}>
            {text}
          </span>
          )
        }
        <span className="item-btns">
          <button onClick={this.onEdit}>
            {isEdit ? <FaCircleCheck /> : <FaPenToSquare /> }
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
