import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <Card className="flex justify-between p-3">
      <span>User: {props.username}</span>
      <span>Age: {props.age}</span>
    </Card>
  );
};

export default UserItem;
