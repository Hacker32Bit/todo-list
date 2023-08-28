import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import TodoListField from "./components/TodoListField";

const App = () => {

  return (
    <div>
      <Header />
      <Search />
      <TodoList />
      <TodoListField />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />) // comment
