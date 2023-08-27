const UserInfo = ({name, age, status}) => {

    const style = {
        color: status ? "green" : "blue"
    }

    return (
        <li style={style}>{name}, {age} years old</li>
    );
}

export default UserInfo;