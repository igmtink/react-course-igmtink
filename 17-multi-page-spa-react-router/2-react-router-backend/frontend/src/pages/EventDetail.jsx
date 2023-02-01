import { Link, useLoaderData, json } from "react-router-dom";

import { Section } from "../components/UI/IgmtInk";
import EventItem from "../components/Events/EventItem";

import { MdEdit } from "react-icons/md";

const EventDetail = (props) => {
  const event = useLoaderData();

  return (
    <Section className="animate-slide-up grid grid-cols-1 gap-6">
      <Link to="edit" className="flex justify-end items-center">
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
          <MdEdit className="text-yellow-500" />
          Edit
        </div>
      </Link>

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
    return resData;
  }
};
