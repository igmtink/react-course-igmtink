import { Button } from "../UI/IgmtInk";

import { Form, useNavigate } from "react-router-dom";

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const formCancelHandler = (event) => {
    navigate("..");
  };

  return (
    // Using (Form) of (React Router) is automatically execute the (action loader)
    <Form method="post" className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-2">
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          name="title"
          type="text"
          placeholder="Title"
          defaultValue={event ? event.title : ""}
        />
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          name="image"
          type="text"
          placeholder="Image URL"
          defaultValue={event ? event.image : ""}
        />
        <input
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          name="date"
          type="date"
          defaultValue={event ? event.date : ""}
        />
        <textarea
          className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
          name="description"
          rows="10"
          placeholder="Description"
          defaultValue={event ? event.description : ""}
        ></textarea>
      </div>
      <div className="flex justify-end max-w-sm">
        <div className="grid grid-flow-col auto-cols-fr gap-2 max-w-sm">
          <Button
            attr={{ onClick: formCancelHandler }}
            className="bg-neutral-900 hover:bg-neutral-900/75"
          >
            Cancel
          </Button>

          <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-500/75">
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EventForm;
