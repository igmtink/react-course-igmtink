import { Card, Section } from "../components/UI/IgmtInk";
import EventsList from "../components/Events/EventsList";

import { BsPlusCircleFill } from "react-icons/bs";

import { Link, useLoaderData } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "Birthday Celebration",
  },
  { id: "e2", title: "Reunion Party" },
  { id: "e3", title: "Nights Out" },
];

const Events = (props) => {
  // (useLoaderData) to get the (data) from (loader)
  const events = useLoaderData();

  return (
    <Section className="grid grid-cols-1 gap-6">
      <div className="flex justify-end items-center">
        <Link
          to="new"
          className="flex gap-2 justify-center items-center px-4 py-2 bg-neutral-900 rounded-md hover:bg-neutral-900/75 transition-colors shadow-md"
        >
          <BsPlusCircleFill className="text-yellow-500" />
          New
        </Link>
      </div>
      <EventsList events={events} />
    </Section>
  );
};

export default Events;
