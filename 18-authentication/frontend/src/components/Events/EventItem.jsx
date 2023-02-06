const EventItem = ({ event }) => {
  console.log(event);
  return (
    <div className="grid grid-cols-1 justify-items-center text-center gap-4">
      <img className="rounded-md" src={event.image} alt="Event Image" />
      <div>
        <h2 className="font-bold text-xl uppercase">{event.title}</h2>
        <p className="mt-2">{event.description}</p>
        <span className="mt-6 block text-neutral-500">{event.date}</span>
      </div>
    </div>
  );
};

export default EventItem;
