import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component {
  state = {
    items: [
      { text: "Learn JS", important: true, id: 1 },
      { text: "Drink Coffee", important: false, id: 2 },
      { text: "Learn React", important: false, id: 3 },
      { text: "Learn TypeScript", important: true, id: 4 },
      { text: "Learn Node.js", important: false, id: 5 },
      { text: "Learn extend Node.js", important: false, id: 6 },
    ],
    term: ""
  };

  onSearch = (term) => {
    this.setState({ term })
  }
  
  handleSearch = (items, term) => {
    if (term.trim().length === 0){
      return items;
    }

    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  };

  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);
      // items.splice(idx, 1)

      // [a, b, c, d, e]
      // [a, b] [d, e]

      console.log(idx, "---------");

      return {
        items: [...items.slice(0, idx), ...items.slice(idx + 1)],
      };
    });
  };

  render() {
    const { items, term } = this.state;
    const visibleItem = this.handleSearch(items, term)

    return (
      <div className="app">
        <Header done={8} important={23} />
        <Search onSearch={this.onSearch}/>
        <TodoList items={visibleItem} deleteItem={this.deleteItem} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
