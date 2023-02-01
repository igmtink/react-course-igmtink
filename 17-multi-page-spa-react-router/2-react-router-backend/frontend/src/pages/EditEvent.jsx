import { Section } from "../components/UI/IgmtInk";

import EventForm from "../components/Events/EventForm";

const EditEvent = (props) => {
  return (
    <Section className="grid grid-cols-1 gap-4">
      <EventForm />
    </Section>
  );
};

export default EditEvent;
