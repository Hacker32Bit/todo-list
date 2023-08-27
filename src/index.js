import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Users from "./components/Users";


const App = () => {

  const users = [
    { name: 'John', age: 25, status: true },
    { name: 'Bob', age: 30, status: false },
    { name: 'Tom', age: 20, status: true },
    { name: 'Sam', age: 28, status: false },
    { name: 'Ann', age: 24, status: true },
  ]

  return (
    <div>
      <Header />
      <Search />
      <TodoList />
      <Users users={users}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />) // comment
