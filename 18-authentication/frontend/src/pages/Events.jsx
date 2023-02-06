import { Card, Section } from "../components/UI/IgmtInk";
import EventsList from "../components/Events/EventsList";

import { BsPlusCircleFill } from "react-icons/bs";

import {
  Link,
  useLoaderData,
  json,
  defer,
  Await,
  useRouteLoaderData,
} from "react-router-dom";
import { Suspense } from "react";

// const EVENTS = [
//   {
//     id: "e1",
//     title: "Birthday Celebration",
//   },
//   { id: "e2", title: "Reunion Party" },
//   { id: "e3", title: "Nights Out" },
// ];

const Events = (props) => {
  // !(useLoaderData) to get the (data) from (loader)
  const { events } = useLoaderData();
  const token = useRouteLoaderData("root");

  return (
    <Section className="grid grid-cols-1 gap-6">
      <div className="flex justify-end items-center">
        {token && (
          <Link
            to="new"
            className="flex gap-2 justify-center items-center px-4 py-2 bg-neutral-900 rounded-md hover:bg-neutral-900/75 transition-colors shadow-md"
          >
            <BsPlusCircleFill className="text-yellow-500" />
            New
          </Link>
        )}
      </div>
      {/* !(Suspense) to show a fallback while we're waiting for other (data) to arrive */}
      <Suspense fallback={<span className="text-center">Loading...</span>}>
        {/* !(Await) is component provided by (Router React) that will handle all (data) coming from (defer) */}
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </Section>
  );
};

export default Events;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    // status: 500,
    // });

    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();

    // !(React Router) will automatically take any value you return in the function and will make that (data) available in that page (element) that's being rendered here
    return resData.events;
  }
};

// !(loader) function can't use (React Hooks)
export const loader = () => {
  // !(defer) to fetch (data) it can (navigate) on (Page) while we are waiting for (data)
  return defer({
    events: loadEvents(),
  });
};

// !Normal way to fetch (data)
// export const loader = async () => {
//   const response = await fetch("http://localhost:8080/events");
//
//   if (!response.ok) {
//     // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
//     // status: 500,
//     // });
//
//     throw json({ message: "Could not fetch events." }, { status: 500 });
//   } else {
//     const resData = await response.json();
//
//     // !(React Router) will automatically take any value you return in the function and will make that (data) available in that page (element) that's being rendered here
//     return resData.events;
//   }
// }
