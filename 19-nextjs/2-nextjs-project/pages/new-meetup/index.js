import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { Section } from "@/components/ui/igmtink";

const NewMeetup = () => {
  const newMeetupHandler = (meetupData) => {
    return console.log(meetupData);
  };

  return (
    <Section>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </Section>
  );
};

export default NewMeetup;
