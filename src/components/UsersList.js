import UserInfo from "./UserInfo";

const UsersList = ({usersList}) => {

    console.log(usersList)

    const data = usersList.map((item) => {
        return (<UserInfo name={item.name} age={item.age} status={item.status} />)
    });    

    return (
        <table>
            <tr>
            <th>Name</th>
            <th>Age</th>
            </tr>
            {data}
        </table> 
    );
}

export default UsersList;