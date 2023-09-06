import { Component } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";


class TodoList extends Component { 

   render () {
    const { items, deleteItem, editItem } = this.props

    const data = items.map(({ text, important, id }) => {
      return (<TodoListItem 
        text={text} 
        important={important} 
        key={id}
        id={id}
        deleteItem={deleteItem} 
        editItem={editItem}/>
        );
    });

    return (
      <ul className="todolist">{data}</ul>
    );
  }
}

export default TodoList;
