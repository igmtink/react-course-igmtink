import { Button } from "../UI/IgmtInk";

import { Link } from "react-router-dom";

const EventForm = (props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-2">
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          type="text"
          placeholder="Title"
        />
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          type="date"
          placeholder="Image URL"
        />
        <textarea
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          rows="10"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="flex justify-end max-w-sm">
        <div className="grid grid-flow-col auto-cols-fr gap-2 max-w-sm">
          <Button className="bg-neutral-900 hover:bg-neutral-900/75">
            <Link to=".." relative="path">
              Cancel
            </Link>
          </Button>

          <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-500/75">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
