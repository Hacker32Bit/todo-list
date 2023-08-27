const UsersItem = ({user}) => {

    const {name, age, status} = user;

return (
    <li style={{color: status ? "green" : "blue"}}>Name: {name}, Age: {age}</li>
);
}

export default UsersItem;