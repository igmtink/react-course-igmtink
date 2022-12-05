import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <ul className="grid gap-3">
      {props.users.map((user) => (
        <li key={user._id}>
          {<UserItem username={user.username} age={user.age} />}
        </li>
      ))}
    </ul>
  );
};

export default Users;
