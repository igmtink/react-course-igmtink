import { Section } from "@/components/ui/igmtink";

import { MongoClient, ObjectId } from "mongodb";

const MeetupDetail = (props) => {
  return (
    <Section>
      <h1>{props.meetupData.title}</h1>
    </Section>
  );
};

export default MeetupDetail;

// !(getStaticPaths) to create a dynamically (Page / Components) that have (Query Parameters)
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin-test:admintest@testdb.ugiukba.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  // !Find all (Data) from (MongoDB) with specific (Data)
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// !(getStaticProps) for handling (Data) that will pass to our (Page / Components)
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin-test:admintest@testdb.ugiukba.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  // !Get single (Data) from (MongoDB)
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
      },
    },
  };
}
