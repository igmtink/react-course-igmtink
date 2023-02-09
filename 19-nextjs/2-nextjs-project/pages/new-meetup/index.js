import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { Section } from "@/components/ui/igmtink";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();

  const newMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <Section>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </Section>
  );
};

export default NewMeetup;
