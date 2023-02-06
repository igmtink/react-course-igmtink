import { useLoaderData, json, Link } from "react-router-dom";

import { Card, Section } from "../UI/IgmtInk";

const EventsList = ({ events }) => {
  // (useLoaderData) to get the (data) from (loader)
  // const events = useLoaderData();

  return (
    <Section>
      <ul className="grid grid-cols-1 gap-4">
        {events.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>
              <Card className="flex hover:bg-neutral-900/75 transition-colors">
                <img className="w-1/2" src={item.image} alt="Events Image" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <span className="text-neutral-500 text-xs">{item.date}</span>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default EventsList;
