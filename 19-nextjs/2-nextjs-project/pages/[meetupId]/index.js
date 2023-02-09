import { Section } from "@/components/ui/igmtink";

const MeetupDetail = (props) => {
  return (
    <Section>
      <h1>{props.meetupData.title}</h1>
    </Section>
  );
};

export default MeetupDetail;

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg",
        address: "Some address 5, 12345 Some City",
      },
    },
  };
}
