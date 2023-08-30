import Button from "../Button/Button";
import "./additem.css"

const AddItem = () => {

    return (
        <div className="additem">
            <input type="text" placeholder="Type text"/>
            <Button text="Add item" color="white" bcolor="#2ecc71"/>
        </div>
    );

}

export default AddItem;