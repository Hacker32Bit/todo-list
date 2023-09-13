import { Component } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";


class TodoList extends Component { 

   render () {
    const { items, deleteItem, onImportant, onDone } = this.props

    const data = items.map(({ text, important, done, id }) => {
      return (<TodoListItem 
        text={text} 
        important={important} 
        done={done}
        key={id}
        id={id}
        deleteItem={deleteItem} 
        onImportant={onImportant}
        onDone={onDone}
        />
        );
    });

    return (
      <ul className="todolist">{data}</ul>
    );
  } 
}

export default TodoList;
