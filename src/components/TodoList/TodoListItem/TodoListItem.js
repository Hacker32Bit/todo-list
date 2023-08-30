import Button from "../../Button/Button";

const TodoListItem = ({ text, important }) => {
  const style = {
    color: important ? "red" : "black",
  };

  return (
    <div className="element">
      <li style={style}>{text}<br></br>
      <Button text="Edit" color="white" bcolor="#f39c12"/>
      <Button text="Important" color="white" bcolor="#3498db"/>
      <Button text="Delete" color="white" bcolor="#e74c3c"/>
      </li>
    </div>
  );
};

export default TodoListItem;
