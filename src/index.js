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
      { text: "Learn JS", important: true, done: false, id: 1 },
      { text: "Drink Coffee", important: false, done: false, id: 2 },
      { text: "Learn React", important: false, done: false, id: 3 },
      { text: "Learn TypeScript", important: true, done: false, id: 4 },
      { text: "Learn Node.js", important: false, done: false, id: 5 },
      { text: "Learn extend Node.js", important: false, done: false, id: 6 },
    ],
    term: "",
  };

  onSearch = (term) => {
    this.setState({ term });
  };

  handleSearch = (items, term) => {
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
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

  onImportant = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);

      const newItem = {
        ...items[idx],
        important: !items[idx].important,
      };

      return {
        items: [...items.slice(0, idx), newItem, ...items.slice(idx + 1)],
      };
    });
  };

  onDone = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);

      const newItem = {
        ...items[idx],
        done: !items[idx].done,
      };

      return {
        items: [...items.slice(0, idx), newItem, ...items.slice(idx + 1)],
      };
    });
  };

  onAddItem = (text) => {
    const id = this.state.items.length
      ? this.state.items[this.state.items.length - 1].id + 1
      : 1;

    const newItem = {
      text,
      important: false,
      id,
    };

    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem],
      };
    });
  };

  doneCount = () => {
    let elementCount = 0;

    this.state.items.forEach(item => {
      if (item.done)
        elementCount += 1
    });

    return elementCount
  }

  importantCount = () => {
    let elementCount = 0;

    this.state.items.forEach(item => {
      if (item.important)
        elementCount += 1
    });

    return elementCount
  }

  render() {
    const { items, term } = this.state;
    const visibleItem = this.handleSearch(items, term);

    return (
      <div className="app">
        <Header done={this.doneCount()} important={this.importantCount()} />
        <Search onSearch={this.onSearch} />
        <TodoList
          items={visibleItem}
          deleteItem={this.deleteItem}
          onImportant={this.onImportant}
          onDone={this.onDone}
        />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
