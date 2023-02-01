const EventItem = ({ event }) => {
  console.log({ ...event });
  return (
    <div>
      <img src={event.image} alt="Event Image" />
      <div>
        <h2>{event.title}</h2>
      </div>
    </div>
  );
};

export default EventItem;
