import UserInfo from "./UserInfo";

const UsersList = ({usersList}) => {

    console.log(usersList)

    const data = usersList.map((item) => {
        return (<UserInfo name={item.name} age={item.age} status={item.status} />)
    });    

    return (
        <ul>{data}</ul> 
    );
}

export default UsersList;