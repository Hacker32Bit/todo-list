import TodoListItem from "./TodoListItem";

const TodoList = () => {

  const item = [
    {text: "Learn JS", important: true},
    {text: "Drink Coffee", important: false},
    {text: "Learn React", important: false},
    {text: "Learn TypeScript", important: true}
  ]


    return (
      <ul>
        <TodoListItem text={item[0].text} important={item[0].important} />
        <TodoListItem text={item[1].text} important={item[1].important}/>
        <TodoListItem text={item[2].text} important={item[2].important}/>
        <TodoListItem text={item[3].text} important={item[3].important}/>
      </ul>
    );
}

export default TodoList;