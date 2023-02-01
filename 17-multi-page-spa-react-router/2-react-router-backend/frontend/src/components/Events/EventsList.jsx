import { useLoaderData } from "react-router-dom";

import { Card, Section } from "../UI/IgmtInk";

const EventsList = ({ events }) => {
  // (useLoaderData) to get the (data) from (loader)
  // const events = useLoaderData();

  return (
    <Section>
      <ul>
        {events.map((item) => (
          <li key={item.id}>
            <Card className="flex">
              <img className="w-1/2" src={item.image} alt="Events Image" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <span className="text-neutral-500 text-xs">{item.date}</span>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default EventsList;

// (loader) function can't use (React Hooks)
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    // (React Router) will automatically take any value you return in the function and will make that (data) available in that page (element) that's being rendered here
    return resData.events;
  }
};
