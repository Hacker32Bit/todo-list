import UsersItem from "./UsersItem"

const Users = ({users}) => {
    return (
        <ul>
            {
                users.map((user) => {
                    return <UsersItem user={user} />
                })
            }
        </ul>
    );
}

export default Users;