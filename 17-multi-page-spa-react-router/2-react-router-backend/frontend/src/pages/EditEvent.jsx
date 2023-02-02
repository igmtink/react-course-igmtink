import { Section } from "../components/UI/IgmtInk";

import EventForm from "../components/Events/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEvent = (props) => {
  const event = useRouteLoaderData("event-detail");
  return (
    <Section className="grid grid-cols-1 gap-4">
      <EventForm method="patch" event={event} />
    </Section>
  );
};

export default EditEvent;
