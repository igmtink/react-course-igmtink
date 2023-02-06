import {
  Link,
  useRouteLoaderData,
  json,
  redirect,
  useSubmit,
} from "react-router-dom";

import { Button, Section } from "../components/UI/IgmtInk";
import EventItem from "../components/Events/EventItem";

import { MdEdit } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const EventDetail = (props) => {
  // (useRouteLoaderData) to get the (data) from (Root Router Loader) by (id)
  const event = useRouteLoaderData("event-detail");
  // (useSubmit) for programmatically execute the (action loader) of (Route React)
  const submit = useSubmit();

  const deleteEventHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      // (submit) have a two argument ({}) for the (Data) that we fetch in the (action loader) and the second is ({method})
      submit(null, { method: "delete" });
    }
  };

  return (
    <Section className="grid grid-cols-1 gap-6">
      <div className="flex justify-between items-center">
        <Link to=".." relative="path">
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
            <BiArrowBack />
            Back
          </div>
        </Link>
        <div className="flex gap-2">
          <Button
            attr={{ onClick: deleteEventHandler }}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md"
          >
            <TiDelete className="text-yellow-500" /> Delete
          </Button>
          <Link to="edit">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
              <MdEdit className="text-yellow-500" />
              Edit
            </div>
          </Link>
        </div>
      </div>

      <EventItem event={event} />
    </Section>
  );
};

export default EventDetail;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch detail for that selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

// (action) to delete (Data)
export const action = async ({ params }) => {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};
