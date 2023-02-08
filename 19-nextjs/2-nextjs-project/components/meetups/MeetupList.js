import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {props.meetups.map((item) => (
        <li key={item.id}>
          <MeetupItem
            id={item.id}
            title={item.title}
            image={item.image}
            address={item.address}
          />
        </li>
      ))}
    </ul>
  );
};

export default MeetupList;
