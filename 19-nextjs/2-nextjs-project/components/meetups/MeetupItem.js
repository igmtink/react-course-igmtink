import { Card } from "../ui/igmtink";

const MeetupItem = (props) => {
  return (
    <Card className="flex overflow-hidden">
      <img className="w-1/2" src={props.image} alt={props.title} />
      <div className="p-4 grid grid-cols-1 gap-2">
        <di>
          <h1 className="text-lg font-bold">{props.title}</h1>
          <h2 className="text-sm">{props.address}</h2>
        </di>

        <button className="rounded-md bg-neutral-900 text-white px-4 py-2">
          Show Detail
        </button>
      </div>
    </Card>
  );
};

export default MeetupItem;
