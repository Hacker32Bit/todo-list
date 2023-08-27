const UserInfo = ({name, age, status}) => {

    const style = {
        color: status ? "green" : "blue"
    }

    return (
        <tr style={style}>
            <th>{name}</th>
            <th>{age}</th>
        </tr>
    );
}

export default UserInfo;