import ShowDate from "./ShowDate";

const Header = () => {
    return (<div>
        <h1>Todo List</h1>
        <ShowDate text="Publish date: now"/>
        </div>
    );
}

export default Header;