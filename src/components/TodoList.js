import TodoListItem from "./TodoListItem";

const TodoList = () => {

  const items = [
    {text: "Learn JS", important: true},
    {text: "Drink Coffee", important: false},
    {text: "Learn React", important: false},
    {text: "Learn TypeScript", important: true},
    {text: "Learn Node.js", important: false},
  ]

  const data = items.map(({text, important}) => {

    return (<TodoListItem text={text} important={important} />)
  });

    return (
      <ul>{data}</ul>
    );
}

export default TodoList;