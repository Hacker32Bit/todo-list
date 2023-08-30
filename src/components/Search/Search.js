import Button from "../Button/Button";
import "./search.css"

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Type for search"/>
            <Button text="Search" color="white" bcolor="#8e44ad"/>
        </div>
    );
}

export default Search;